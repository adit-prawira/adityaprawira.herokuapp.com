import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
const styles = {
    root: {
        border: "1px solid azure",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1%",
    },
};
const DetailsNavigator = ({ classes, elements, currentItemTitle, history }) => {
    const index = elements.map((item) => item.title).indexOf(currentItemTitle);

    const hasNextItem = index < elements.length - 1;
    const hasPreviousItem = index > 0;

    const decide = () => {
        return (
            <>
                <Grid
                    item
                    xs={12}
                    sm={1}
                    // style={{
                    //     border: "1px solid azure",
                    // }}
                >
                    {" "}
                    {hasPreviousItem && (
                        <Link
                            to={`/projects/${elements[index - 1].title
                                .toLowerCase()
                                .replace(/ /g, "-")}`}
                        >
                            <Button
                                variant="outlined"
                                color="secondary"
                                style={{ width: "100%" }}
                            >
                                <ArrowBackIcon />
                                Previous
                            </Button>
                        </Link>
                    )}
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={10}
                    // style={{
                    //     border: "1px solid azure",
                    // }}
                >
                    <Link to={`/projects`}>
                        <Button
                            variant="outlined"
                            color="primary"
                            style={{ width: "100%" }}
                        >
                            Go Back
                        </Button>
                    </Link>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={1}
                    // style={{
                    //     border: "1px solid azure",
                    // }}
                >
                    {hasNextItem && (
                        <Link
                            to={`/projects/${elements[index + 1].title
                                .toLowerCase()
                                .replace(/ /g, "-")}`}
                        >
                            <Button
                                variant="outlined"
                                color="secondary"
                                style={{ width: "100%" }}
                            >
                                Next <ArrowForwardIcon />
                            </Button>
                        </Link>
                    )}
                </Grid>
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
