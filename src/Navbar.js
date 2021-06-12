import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Clock } from "grommet";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { withRouter } from "react-router";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "space-between",
    },
    menuButton: {
        marginRight: theme.spacing(1),
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        "&:hover": {
            color: "black",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            transition: "background-color 0.3s ease-in-out",
        },
    },
    title: {
        flexGrow: 1,
    },
    button: {
        color: "white",
        marginLeft: "1%",
        paddingRight: "1%",
        paddingLeft: "1%",
        "&:hover": {
            backgroundColor: "rgb(53,53,61)",
            transition: "background-color 0.5s ease-in-out",
        },
    },
}));

const Navbar = ({ history }) => {
    const classes = useStyles();
    return (
        <div>
            <AppBar
                position="static"
                style={{
                    backgroundColor: "rgb(43, 48, 62)",
                }}
                elevation={0}
            >
                <Toolbar
                    style={{ display: "flex", justifyContent: "space-around" }}
                >
                    <Button
                        onClick={() => history.push("/")}
                        className={classes.button}
                    >
                        Home
                    </Button>
                    <Button
                        onClick={() => history.push("/about")}
                        className={classes.button}
                    >
                        About
                    </Button>
                    <Button
                        onClick={() => history.push("/projects")}
                        className={classes.button}
                    >
                        Projects
                    </Button>
                    <Button
                        onClick={() => history.push("/artworks")}
                        className={classes.button}
                    >
                        Artworks/Albums
                    </Button>
                    <Clock
                        type="digital"
                        color="azure"
                        style={{ marginLeft: "1%" }}
                    />
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withRouter(Navbar);
