import React, { Component } from "react";
// import About from "./About";

// import AwesomeSlider from "react-awesome-slider";
// import AwesomeSliderStyles from "react-awesome-slider/dist/styles.css";
// import Particles from "react-particles-js";
// import { particle } from "./styles/ParticleStyles";
import Page from "./Page";
import Home from "./Home";
import About from "./About";
import Artworks from "./Artworks";
import ProjectsTimeline from "./ProjectsTimeline";
import Navbar from "./Navbar";
import { projects } from "./seedInfo";
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
                                            <Artworks {...routeProps} />
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
