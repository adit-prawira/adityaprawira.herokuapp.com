import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Clock } from "grommet";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
  },
  flexGrow: {
    flexGrow: 1,
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
    backgroundColor: "rgba(255, 255, 255, 0)",
    marginLeft: "1%",
    paddingRight: "1%",
    paddingLeft: "1%",
    "&:hover": {
      backgroundColor: "rgb(53,53,61)",
      transition: "background-color 0.5s ease-in-out",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "rgb(43, 48, 62)",
        width: "100%",
        height: "8vh",
      }}
      elevation={0}
    >
      <Toolbar>
        <Button onClick={() => history.push("/")} className={classes.button}>
          Home
        </Button>
        <div className={classes.flexGrow} />
        <Button
          onClick={() => history.push("/about")}
          className={classes.button}
        >
          About
        </Button>
        <div className={classes.flexGrow} />
        <Button
          onClick={() => history.push("/projects")}
          className={classes.button}
        >
          Projects
        </Button>
        <div className={classes.flexGrow} />
        <Button
          onClick={() => history.push("/artworks")}
          className={classes.button}
        >
          Artworks/Albums
        </Button>
        <div className={classes.flexGrow} />
        <Clock type="digital" color="azure" style={{ marginLeft: "1%" }} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
