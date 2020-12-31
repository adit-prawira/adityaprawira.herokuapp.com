import React, { Component } from "react";
import About from "./About";
import ProjectsTimeline from "./ProjectsTimeline";
import { projects, experiences, educations } from "./seedInfo";
import { withStyles } from "@material-ui/core/styles";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/dist/styles.css";
import Time from "./Time";
import Particles from "react-particles-js";
import { particle } from "./styles/ParticleStyles";
import ReactPlayer from "react-player";
const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "azure",
    },
    timeline: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "azure",
        paddingLeft: "10%",
        paddingRight: "10%",
    },
    particlePage: {
        backgroundColor: "#030614fa",
        width: "100%",
        height: "100%",
    },

    "& AwesomeSlider": {
        overflow: "visible",
    },
};

class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <AwesomeSlider cssModule={AwesomeSliderStyles}>
                <div className={classes.particlePage}>
                    <Time />
                    <Particles params={particle} />
                </div>
                <div className={classes.container}>
                    <About />
                </div>
                <div className={classes.timeline}>
                    <ProjectsTimeline projects={projects} />
                </div>
                <div className={classes.container}>Art</div>
            </AwesomeSlider>
        );
    }
}

export default withStyles(styles)(App);
