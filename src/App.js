import "react-perfect-scrollbar/dist/css/styles.css";
import React from "react";
import Home from "./Home";
import About from "./About";
import Artworks from "./Artworks";
import ProjectsTimeline from "./ProjectsTimeline";
import ProjectDetails from "./ProjectDetails";
import EducationDetails from "./EducationDetails";
import { projects, artworks, educations, workExperiences } from "./seedInfo";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ThemeProvider } from "@material-ui/styles";
import { darkTheme } from "./theme-dark";
import Navbar from "./Navbar";
import CustomFooter from "./CustomFooter";
import CustomParticle from "./CustomParticle";
import Page from "./Page";
import WorkExperienceDetails from "./WorkExperienceDetails";

function App() {
  function findProject(urlTitle) {
    return projects.find(function (project) {
      return project.title.toLowerCase().replace(/ /g, "-") === urlTitle;
    });
  }
  function findEducation(urlTitle) {
    return educations.find(function (education) {
      return education.title.toLowerCase().replace(/ /g, "-") === urlTitle;
    });
  }
  function findWorkExperience(urlTitle) {
    return workExperiences.find(
      ({ title }) => title.toLowerCase().replace(/ /g, "-") === urlTitle
    );
  }
  function filteredProjects(urlTitle) {
    return projects.filter(function (project) {
      return project.title.toLowerCase().replace(/ /g, "-") !== urlTitle;
    });
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <Navbar />
        <CustomParticle />
        <div>
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="page"
                  timeout={1000}
                >
                  <Switch location={location}>
                    <Route
                      exact
                      path="/"
                      render={(routeProps) => (
                        <Page>
                          <Home
                            projects={projects}
                            artworks={artworks}
                            {...routeProps}
                          />
                        </Page>
                      )}
                    />
                    <Route
                      exact
                      path="/about"
                      render={(routeProps) => (
                        <Page>
                          <About
                            educations={educations}
                            workExperiences={workExperiences}
                            {...routeProps}
                          />
                        </Page>
                      )}
                    />
                    <Route
                      exact
                      path="/about/educations/:title"
                      render={(routeProps) => (
                        <Page>
                          <EducationDetails
                            education={findEducation(
                              routeProps.match.params.title
                            )}
                            allEducations={educations}
                            {...routeProps}
                          />
                        </Page>
                      )}
                    />
                    <Route
                      exact
                      path="/about/work-experiences/:title"
                      render={(routeProps) => (
                        <Page>
                          <WorkExperienceDetails
                            workExperience={findWorkExperience(
                              routeProps.match.params.title
                            )}
                            allWorkExperiences={workExperiences}
                            {...routeProps}
                          />
                        </Page>
                      )}
                    />
                    <Route
                      exact
                      path="/projects"
                      render={(routeProps) => (
                        <Page>
                          <ProjectsTimeline
                            projects={projects}
                            {...routeProps}
                          />
                        </Page>
                      )}
                    />
                    <Route
                      exact
                      path="/projects/:title"
                      render={(routeProps) => (
                        <Page>
                          <ProjectDetails
                            project={findProject(routeProps.match.params.title)}
                            filteredProjects={filteredProjects(
                              routeProps.match.params.title
                            )}
                            allProjects={projects}
                            {...routeProps}
                          />
                        </Page>
                      )}
                    />
                    <Route
                      exact
                      path="/artworks"
                      render={(routeProps) => (
                        <Page>
                          <Artworks artworks={artworks} {...routeProps} />
                        </Page>
                      )}
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </div>
      </div>
      <CustomFooter />
    </ThemeProvider>
  );
}
export default App;
