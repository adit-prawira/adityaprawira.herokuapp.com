import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import Artworks from "./Artworks";
import ProjectsTimeline from "./ProjectsTimeline";
import ProjectDetails from "./ProjectDetails";
import EducationDetails from "./EducationDetails";
import { projects, artworks, educations } from "./seedInfo";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navbar from "./Navbar";
import MyFooter from "./CustomFooter";
import CustomParticle from "./CustomParticle.jsx";
import Page from "./Page";
class App extends Component {
    constructor(props) {
        super(props);
        this.findProject = this.findProject.bind(this);
        this.filtered = this.filteredProjects.bind(this);
    }
    findProject(urlTitle) {
        return projects.find(function (project) {
            return project.title.toLowerCase().replace(/ /g, "-") === urlTitle;
        });
    }
    findEducation(urlTitle) {
        return educations.find(function (education) {
            return (
                education.title.toLowerCase().replace(/ /g, "-") === urlTitle
            );
        });
    }
    filteredProjects(urlTitle) {
        return projects.filter(function (project) {
            return project.title.toLowerCase().replace(/ /g, "-") !== urlTitle;
        });
    }
    render() {
        return (
            <>
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
                                                            educations={
                                                                educations
                                                            }
                                                            {...routeProps}
                                                        />
                                                    </Page>
                                                )}
                                            />
                                            <Route
                                                exact
                                                path="/about/:title"
                                                render={(routeProps) => (
                                                    <Page>
                                                        <EducationDetails
                                                            education={this.findEducation(
                                                                routeProps.match
                                                                    .params
                                                                    .title
                                                            )}
                                                            allEducations={
                                                                educations
                                                            }
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
                                                        {" "}
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
                                                            project={this.findProject(
                                                                routeProps.match
                                                                    .params
                                                                    .title
                                                            )}
                                                            filteredProjects={this.filteredProjects(
                                                                routeProps.match
                                                                    .params
                                                                    .title
                                                            )}
                                                            allProjects={
                                                                projects
                                                            }
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
                                                        <Artworks
                                                            artworks={artworks}
                                                            {...routeProps}
                                                        />
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
                <MyFooter />
            </>
        );
    }
}

export default App;
