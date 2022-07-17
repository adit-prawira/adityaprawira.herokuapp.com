import React from "react";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import { Box } from "grommet";
import Grid from "@material-ui/core/Grid";
import { v4 as uuidv4 } from "uuid";
import DetailsNavigator from "./DetailsNavigator.jsx";
import styles from "./styles/ProjectDetailsStyles";

function WorkExperienceDetails({
  classes,
  workExperience,
  allWorkExperiences,
}) {
  const { title, companyName, location, start, end, image, descriptions } =
    workExperience;
  const type = "about";
  const category = "work-experiences";
  return (
    <Box className={classes.root}>
      <div className={classes.content}>
        <Grid container spacing={3} className={classes.container}>
          <Grid item xs={12} sm={7}>
            <Typography>
              <label>Position:</label> {title}
            </Typography>
            <Typography>
              <label>Company Name:</label> {`${companyName}, ${location}`}
            </Typography>
            <br />
            <Typography>
              <label>Work Period:</label> {`${start} - ${end}`}
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
        elements={allWorkExperiences}
        currentItemTitle={title}
        type={type}
        category={category}
      />
    </Box>
  );
}
export default withStyles(styles)(WorkExperienceDetails);
