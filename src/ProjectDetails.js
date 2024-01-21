import React from "react";
import { withStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { Box } from "grommet";
import Grid from "@mui/material/Grid";

// import { Projects } from "./common/components/Projects";
import { v4 as uuidv4 } from "uuid";
import styles from "./styles/ProjectDetailsStyles";
import DetailsNavigator from "./DetailsNavigator";

function ProjectDetails({ classes, project, filteredProjects, allProjects }) {
  const { descriptions, startPeriod, endPeriod, image, title } = project;
  const type = "projects";
  return (
    <Box flex fill className={classes.root}>
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
        </Grid>
      </div>
      <DetailsNavigator
        elements={allProjects}
        currentItemTitle={title}
        type={type}
      />
    </Box>
  );
}
export default withStyles(styles)(ProjectDetails);
