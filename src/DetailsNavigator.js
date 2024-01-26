import React from "react";
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
const styles = {
  root: {
    // border: "1px solid azure",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1%",
  },
  button: {
    width: "100%",

    textDecoration: "none",
  },
};
const DetailsNavigator = ({
  classes,
  elements,
  currentItemTitle,
  type,
  category,
}) => {
  const index = elements.map((item) => item.title).indexOf(currentItemTitle);

  const hasNextItem = index < elements.length - 1;
  const hasPreviousItem = index > 0;
  const isFinal = hasPreviousItem && !hasNextItem;
  const isInitial = hasNextItem && !hasPreviousItem;
  const decide = () => {
    return (
      <>
        {hasPreviousItem && (
          <Grid item xs={12} sm={1}>
            <Link
              to={`/${type}/${category ? `${category}/` : ""}${elements[
                index - 1
              ].title
                .toLowerCase()
                .replace(/ /g, "-")}`}
            >
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                <ArrowBackIcon />
              </Button>
            </Link>
          </Grid>
        )}

        <Grid item xs={12} sm={isFinal || isInitial ? 11 : 10}>
          <Link to="/">
            <Button variant="outlined" color="info" className={classes.button}>
              <ExitToAppIcon />
            </Button>
          </Link>
        </Grid>

        {hasNextItem && (
          <Grid item xs={12} sm={1}>
            <Link
              to={`/${type}/${category ? `${category}/` : ""}${elements[
                index + 1
              ].title
                .toLowerCase()
                .replace(/ /g, "-")}`}
            >
              <Button
                aria-label="Next"
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                <ArrowForwardIcon />
              </Button>
            </Link>
          </Grid>
        )}
      </>
    );
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {decide()}
      </Grid>
    </div>
  );
};
export default withStyles(styles)(DetailsNavigator);
