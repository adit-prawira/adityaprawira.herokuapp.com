import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import Typography from "@mui/material/Typography";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import { get, keyBy, map } from "lodash";
import { educations } from "../../../../seedInfo";
import { v4 as uuid } from "uuid";
import { Avatar, Grid } from "@mui/material";
import { TimelineDot } from "@mui/lab";
import { useModal } from "../../../../common/components/Modal";
import { EducationDetails } from "./components/EducationDetails";
import { StyledPaper } from "./styles";

export function EducationTimeline(): JSX.Element {
  const { handleOpen } = useModal();
  const educationDictionary = keyBy(educations, "title");

  return (
    <Grid container>
      <Grid container item xs={12} justifyContent="center" marginBottom={5}>
        <Typography variant="h2">Education timeline</Typography>
      </Grid>
      <Grid item xs={12}>
        <Timeline position="alternate">
          {map(educations, ({ title, startYear, endYear, image }) => (
            <TimelineItem key={uuid()}>
              <TimelineOppositeContent>
                <Typography>
                  {startYear} - {endYear}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="info">
                  <Avatar
                    src={image}
                    sx={{ width: 60, height: 60 }}
                    style={{ padding: 10 }}
                  />
                </TimelineDot>
                <TimelineConnector sx={{ height: 50 }} />
              </TimelineSeparator>
              <TimelineContent>
                <StyledPaper
                  elevation={3}
                  onClick={() => {
                    const education = get(
                      educationDictionary,
                      title,
                      undefined
                    );
                    if (education) {
                      handleOpen({
                        title,
                        content: <EducationDetails education={education} />,
                      });
                    }
                  }}
                >
                  <Typography>{title}</Typography>
                </StyledPaper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Grid>
    </Grid>
  );
}
