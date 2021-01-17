import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "./Navbar";
import Particles from "react-particles-js";
import MyFooter from "./MyFooter";
import { withStyles } from "@material-ui/core/styles";
import { particle } from "./styles/ParticleParams";
import { Box } from "grommet";
import "./styles/Home.css";
const styles = {
    root: {
        color: "azure",
        overflowX: "hidden",
        overflowY: "auto",
        backgroundColor: "rgb(43, 48, 62)",
    },
    time: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    particleContainer: {
        height: "10%",
    },
    content: {
        border: "1px solid azure",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10%",
    },
    link: {
        textDecoration: "none",
        fontWeight: "bold",
        color: "azure",
    },
};
class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Box flex fill className={classes.root}>
                <Navbar />
                <div className={classes.particleContainer}>
                    <div className={classes.particle}>
                        <Particles params={particle} />
                    </div>
                </div>
                <Box className={classes.content}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <h2>
                                Hi, I'm Aditya Prawira, a master's student and
                                also a music producer based out of Melbourne,
                                VIC.
                            </h2>
                        </Grid>
                    </Grid>
                </Box>
                <MyFooter />
            </Box>
        );
    }
}

export default withStyles(styles)(Home);
