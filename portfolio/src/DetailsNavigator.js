import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link, Redirect } from "react-router-dom";
const styles = {
    root: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1%",
        marginTop: 0,
        "& img": {
            width: "5%",
            "&:hover": {
                cursor: "pointer",
                color: "rgba(255,255,255,0.1)",
            },
        },
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
                    <img src="/Images/right-arrow.png" alt="right-arrow" />
                </Link>
            );
        }
        if (!hasNextItem && hasPreviousItem) {
            const previous = elements[index - 1].title
                .toLowerCase()
                .replace(/ /g, "-");
            return (
                <Link to={`/projects/${previous}`}>
                    <img src="/Images/left-arrow.png" alt="left-arrow" />
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
                    <Link to={`/projects/${previous}`}>
                        <img src="/Images/left-arrow.png" alt="left-arrow" />
                    </Link>
                    <Link to={`/projects/${next}`}>
                        <img src="/Images/right-arrow.png" alt="right-arrow" />
                    </Link>
                </>
            );
        }
    };

    return <div className={classes.root}>{decide()}</div>;
};
export default withStyles(styles)(DetailsNavigator);
