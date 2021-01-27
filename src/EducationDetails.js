import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Box } from "grommet";
import Grid from "@material-ui/core/Grid";
import Navbar from "./Navbar";
import MyFooter from "./MyFooter";
import { v4 as uuidv4 } from "uuid";
import DetailsNavigator from "./DetailsNavigator";
// import { Link } from "react-router-dom";
import styles from "./styles/ProjectDetailsStyles";
function EducationDetails({ classes, education, allEducations }) {
    const {
        title,
        degree,
        startYear,
        endYear,
        image,
        descriptions,
        courses,
    } = education;
    const type = "about";
    return (
        <Box flex fill className={classes.root}>
            <Navbar />
            <div className={classes.content}>
                <Grid container spacing={3} className={classes.container}>
                    <Grid item xs={12} sm={7}>
                        <Typography>
                            <label>Company Name:</label> {title}
                        </Typography>
                        <br />
                        <Typography>
                            <label>Degree:</label> {degree}
                        </Typography>
                        <br />
                        <Typography>
                            <label>Date:</label> {startYear} - {endYear}
                        </Typography>
                        <br />
                        <Typography>
                            <label>Related Courses:</label>
                        </Typography>
                        <ul>
                            {courses.map((course) => (
                                <li key={uuidv4()}>{course}</li>
                            ))}
                        </ul>
                        <Typography>
                            <label>Descriptions:</label>
                        </Typography>
                        <ul>
                            {descriptions.map((d) => (
                                <li key={uuidv4()}>{d}</li>
                            ))}
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={5} className={classes.media}>
                        <img src={image} alt={title} />
                    </Grid>
                </Grid>
            </div>
            <DetailsNavigator
                elements={allEducations}
                currentItemTitle={title}
                type={type}
            />
            <MyFooter />
        </Box>
    );
}
export default withStyles(styles)(EducationDetails);
