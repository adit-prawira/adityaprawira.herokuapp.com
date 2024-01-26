import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import Typography from "@mui/material/Typography";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import { map } from "lodash";
import { projects } from "../../../../seedInfo";
import { v4 as uuid } from "uuid";
import { calculateIcon } from "./utils/calculateIcon";
import { Grid } from "@mui/material";

export function ProjectTimeline(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid container item xs={12} justifyContent="center" marginBottom={5}>
        <Typography variant="h2">Project timeline</Typography>
      </Grid>
      <Grid item xs={12}>
        <Timeline position="alternate">
          {map(projects, ({ title, startPeriod, endPeriod, type }) => (
            <TimelineItem key={uuid()}>
              <TimelineOppositeContent>
                <Typography>
                  {startPeriod} - {endPeriod}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                {calculateIcon(type)}
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Link
                  to={`/projects/${title.toLowerCase().replace(/ /g, "-")}`}
                  className={classes.titleProject}
                >
                  <Paper elevation={3} className={classes.paper}>
                    <Typography>{title}</Typography>
                  </Paper>
                </Link>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Grid>
    </Grid>
  );
}
