import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
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
        color: "rgb(244, 213, 138)",
        border: "1px solid rgb(225, 63, 91)",
        textDecoration: "none",
    },
};
const DetailsNavigator = ({ classes, elements, currentItemTitle, type }) => {
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
                            to={`/${type}/${elements[index - 1].title
                                .toLowerCase()
                                .replace(/ /g, "-")}`}
                        >
                            <Button
                                variant="outlined"
                                color="secondary"
                                className={classes.button}
                            >
                                <ArrowBackIcon />
                            </Button>
                        </Link>
                    </Grid>
                )}

                <Grid item xs={12} sm={isFinal || isInitial ? 11 : 10}>
                    <Link to={`/${type}`}>
                        <Button
                            variant="outlined"
                            color="primary"
                            className={classes.button}
                        >
                            <ExitToAppIcon />
                        </Button>
                    </Link>
                </Grid>

                {hasNextItem && (
                    <Grid item xs={12} sm={1}>
                        <Link
                            to={`/${type}/${elements[index + 1].title
                                .toLowerCase()
                                .replace(/ /g, "-")}`}
                        >
                            <Button
                                aria-label="Next"
                                variant="outlined"
                                color="secondary"
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
