import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Grid from "@material-ui/core/Grid";
import { v4 as uuidv4 } from "uuid";

const styles = (theme) => ({
    container: {
        padding: "2%",
    },
    paper: {
        padding: "2%",
        margin: theme.spacing(1),
    },
    readToggle: {
        marginLeft: "25%",
        marginRight: "25%",
    },
});
export default withStyles(styles, { withTheme: true })(function ProjectDetails(
    props
) {
    const [readMore, setReadMore] = useState(false);
    const { index, title, descriptions, classes } = props;
    const readIcon = readMore ? <ExpandLessIcon /> : <ExpandMoreIcon />;
    return (
        <Paper elevation={3} className={classes.paper}>
            {index % 2 === 0 ? (
                <Grid container spacing={3}>
                    <Grid item xs={11}>
                        {title}
                    </Grid>
                    <Grid item xs={1}>
                        <FormControlLabel
                            control={
                                <a
                                    onClick={() => setReadMore(!readMore)}
                                    color="textSecondary"
                                    className={classes.readToggle}
                                >
                                    {readIcon}
                                </a>
                            }
                        />
                    </Grid>
                </Grid>
            ) : (
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <FormControlLabel
                            control={
                                <a
                                    onClick={() => setReadMore(!readMore)}
                                    color="textSecondary"
                                    className={classes.readToggle}
                                >
                                    {readIcon}
                                </a>
                            }
                        />
                    </Grid>
                    <Grid item xs={11}>
                        {title}
                    </Grid>
                </Grid>
            )}

            <Collapse in={readMore}>
                <ul>
                    {descriptions.map((d) => (
                        <li key={uuidv4()}>{d}</li>
                    ))}
                </ul>
            </Collapse>
        </Paper>
    );
});
