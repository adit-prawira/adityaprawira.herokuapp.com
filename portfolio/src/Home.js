import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";

import { Clock } from "grommet";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import { withStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
const styles = {
    root: {
        color: "azure",
        backgroundColor: "rgb(43, 48, 62)",
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
            <div className={classes.root}>
                <Navbar />
                <div className={classes.content}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <h2>
                                Hi, I'm Aditya Prawira, a master's student and
                                also a music producer based out of Melbourne,
                                VIC.
                            </h2>
                        </Grid>

                        <Grid item xs={12}>
                            <Clock type="digital" />
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Home);
