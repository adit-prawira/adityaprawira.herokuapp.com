import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
const styles = {
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "auto",
        marginBottom: "auto",
    },
};
const DetailsNavigator = ({ classes, elements, currentItemTitle, history }) => {
    const index = elements.map((item) => item.title).indexOf(currentItemTitle);

    const hasNextItem = index < elements.length - 1;
    const hasPreviousItem = index > 0;

    const decide = () => {
        if (hasNextItem && !hasPreviousItem) {
            const next = elements[index + 1].title
                .toLowerCase()
                .replace(/ /g, "-");
            return (
                <Link to={`/projects/${next}`}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        style={{ width: "100%" }}
                    >
                        <ArrowForwardIcon />
                    </Button>
                </Link>
            );
        }
        if (!hasNextItem && hasPreviousItem) {
            const previous = elements[index - 1].title
                .toLowerCase()
                .replace(/ /g, "-");
            return (
                <Link to={`/projects/${previous}`}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        style={{ width: "100%" }}
                    >
                        <ArrowBackIcon />
                    </Button>
                </Link>
            );
        }
        if (hasNextItem && hasPreviousItem) {
            const next = elements[index + 1].title
                .toLowerCase()
                .replace(/ /g, "-");
            const previous = elements[index - 1].title
                .toLowerCase()
                .replace(/ /g, "-");
            return (
                <>
                    <Grid
                        item
                        xs={12}
                        sm={1}
                        style={{
                            border: "1px solid azure",
                        }}
                    >
                        {" "}
                        <Link to={`/projects/${previous}`}>
                            <Button
                                variant="outlined"
                                color="secondary"
                                style={{ width: "100%" }}
                            >
                                <ArrowBackIcon />
                            </Button>
                        </Link>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={10}
                        style={{
                            border: "1px solid azure",
                        }}
                    ></Grid>
                    <Grid
                        item
                        xs={12}
                        sm={1}
                        style={{
                            border: "1px solid azure",
                        }}
                    >
                        <Link to={`/projects/${next}`}>
                            <Button
                                variant="outlined"
                                color="secondary"
                                style={{ width: "100%" }}
                            >
                                <ArrowForwardIcon />
                            </Button>
                        </Link>
                    </Grid>
                </>
            );
        }
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
