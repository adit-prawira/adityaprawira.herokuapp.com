import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
const styles = (theme) => ({
    container: {
        padding: "2%",
    },
    paper: {
        margin: theme.spacing(1),
    },
});
export default withStyles(styles, { withTheme: true })(function SeeMore(props) {
    const [readMore, setReadMore] = useState(false);
    const { descriptions, classes } = props;
    const readText = readMore ? "Read Less" : "Read More...";
    return (
        <div className={classes.container}>
            <FormControlLabel
                control={
                    <a
                        onClick={() => setReadMore(!readMore)}
                        color="textSecondary"
                    >
                        {readText}
                    </a>
                }
            />
            <Collapse in={readMore}>
                <ul>
                    {descriptions.map((d) => (
                        <li>{d}</li>
                    ))}
                </ul>
            </Collapse>
        </div>
    );
});
