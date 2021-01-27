import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Clock } from "grommet";
import styles from "./styles/NavbarStyles";

const Navbar = ({ classes }) => {
    return (
        <nav className={classes.navbar}>
            <Link to="/" className={classes.link}>
                Home
            </Link>
            <Link to="/about" className={classes.link}>
                About
            </Link>
            <Link to="/projects" className={classes.link}>
                Projects
            </Link>
            <Link to="/artworks" className={classes.link}>
                Artworks/Albums
            </Link>
            <Clock type="digital" color="azure" />
        </nav>
    );
};

export default withStyles(styles)(Navbar);
