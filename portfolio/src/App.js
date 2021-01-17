import React, { Component } from "react";
import Page from "./Page";
import Home from "./Home";
import About from "./About";
import Artworks from "./Artworks";
import ProjectsTimeline from "./ProjectsTimeline";
import { projects, artworks } from "./seedInfo";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class App extends Component {
    render() {
        return (
            <Route
                render={({ location }) => (
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            classNames="page"
                            timeout={500}
                        >
                            <Switch location={location}>
                                <Route
                                    exact
                                    path="/"
                                    render={(routeProps) => (
                                        <Page>
                                            <Home {...routeProps} />
                                        </Page>
                                    )}
                                />
                                <Route
                                    exact
                                    path="/about"
                                    render={(routeProps) => (
                                        <Page>
                                            <About {...routeProps} />
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
                                            <ProjectsTimeline
                                                projects={projects}
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
        );
    }
}

export default App;
