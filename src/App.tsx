import Home from "./pages/Home";
import About from "./About";
import Artworks from "./Artworks";
import ProjectsTimeline from "./ProjectsTimeline";
import ProjectDetails from "./ProjectDetails";
import EducationDetails from "./EducationDetails";
import { projects, artworks, educations, workExperiences } from "./seedInfo";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "./common/components/ThemeProvider";
import Navbar from "./Navbar";
import CustomFooter from "./CustomFooter";
import CustomParticle from "./CustomParticle";
import Page from "./common/components/Page";
import WorkExperienceDetails from "./WorkExperienceDetails";
import PerfectScrollBar from "react-perfect-scrollbar";

export default function App(): JSX.Element {
  function findProject(urlTitle: string) {
    return projects.find(function (project) {
      return project.title.toLowerCase().replace(/ /g, "-") === urlTitle;
    });
  }
  function findEducation(urlTitle: string) {
    return educations.find(function (education) {
      return education.title.toLowerCase().replace(/ /g, "-") === urlTitle;
    });
  }
  function findWorkExperience(urlTitle: string) {
    return workExperiences.find(
      ({ title }) => title.toLowerCase().replace(/ /g, "-") === urlTitle
    );
  }
  function filteredProjects(urlTitle: string) {
    return projects.filter(function (project) {
      return project.title.toLowerCase().replace(/ /g, "-") !== urlTitle;
    });
  }
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <CustomParticle />
        <div>
          <Route
            render={({ location }) => (
              <PerfectScrollBar>
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <Page>
                        <Home />
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
                        <ProjectsTimeline projects={projects} {...routeProps} />
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
              </PerfectScrollBar>
            )}
          />
        </div>
      </div>
      <CustomFooter />
    </ThemeProvider>
  );
}
