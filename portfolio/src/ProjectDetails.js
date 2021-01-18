import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Box } from "grommet";
import Grid from "@material-ui/core/Grid";
import Navbar from "./Navbar";
import MyFooter from "./MyFooter";
import ProjectCarousel from "./ProjectCarousel";
import { v4 as uuidv4 } from "uuid";
import styles from "./styles/ProjectDetailsStyles";
function ProjectDetails({ classes, project, filteredProjects }) {
    const { descriptions, startPeriod, endPeriod, image, title } = project;
    return (
        <Box flex fill className={classes.root}>
            <Navbar />
            <div className={classes.content}>
                <Grid container spacing={3} className={classes.container}>
                    <Grid item xs={12} sm={7}>
                        <Typography>
                            <label>Project Title:</label> {title}
                        </Typography>
                        <br />
                        <Typography>
                            <label>Date:</label> {startPeriod} - {endPeriod}
                        </Typography>
                        <br />
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
                    <Grid item xs={12} sm={12}>
                        <Typography>
                            <label>See more projects:</label>
                        </Typography>
                        <br />
                        <ProjectCarousel projects={filteredProjects} />
                    </Grid>
                </Grid>
            </div>

            <MyFooter />
        </Box>
    );
}
export default withStyles(styles)(ProjectDetails);
