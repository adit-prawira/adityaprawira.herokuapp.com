import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import Typography from "@mui/material/Typography";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import Paper from "@mui/material/Paper";
import { useStyles } from "./styles";
import { get, keyBy, map } from "lodash";
import { workExperiences } from "../../../../seedInfo";
import { v4 as uuid } from "uuid";
import { Avatar, Grid } from "@mui/material";
import { useModal } from "../../../../common/components/Modal";
import { WorkExperienceDetails } from "./components/WorkExperienceDetails";

export function WorkExperienceTimeline(): JSX.Element {
  const classes = useStyles();
  const { handleOpen } = useModal();
  const workExperienceDictionary = keyBy(workExperiences, "title");
  return (
    <Grid container>
      <Grid container item xs={12} justifyContent="center" marginBottom={5}>
        <Typography variant="h2">Work experience timeline</Typography>
      </Grid>
      <Grid item xs={12}>
        <Timeline position="alternate">
          {map(workExperiences, ({ title, start, end, image }) => (
            <TimelineItem key={uuid()}>
              <TimelineOppositeContent>
                <Typography>
                  {start} - {end}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <Avatar src={image} sx={{ width: 70, height: 70 }} />
                <TimelineConnector sx={{ height: 50 }} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper
                  elevation={3}
                  className={classes.paper}
                  onClick={() => {
                    const workExperience = get(
                      workExperienceDictionary,
                      title,
                      undefined
                    );
                    if (workExperience) {
                      handleOpen({
                        title,
                        content: (
                          <WorkExperienceDetails
                            workExperience={workExperience}
                          />
                        ),
                      });
                    }
                  }}
                >
                  <Typography>{title}</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Grid>
    </Grid>
  );
}
