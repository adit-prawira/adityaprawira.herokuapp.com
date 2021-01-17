import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Clock } from "grommet";
const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        padding: "1%",
        color: "azure",
        backgroundColor: "rgb(43, 48, 62)",
    },
    link: {
        textDecoration: "none",
        fontWeight: "bold",
        color: "azure",
    },
};

class Navbar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <nav className={classes.navbar}>
                <Link to="/" className={classes.link}>
                    Home
                </Link>
                <Link to="/about" className={classes.link}>
                    About
                </Link>
                <Link to="/projects" className={classes.link}>
                    Project
                </Link>
                <Link to="/artworks" className={classes.link}>
                    Artworks
                </Link>
                <Clock type="digital" color="azure" />
            </nav>
        );
    }
}

export default withStyles(styles)(Navbar);
