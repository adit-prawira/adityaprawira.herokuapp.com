import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import Typography from "@mui/material/Typography";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { StyledPaper } from "./styles";
import { get, keyBy, map } from "lodash";
import { projects } from "../../../../seedInfo";
import { v4 as uuid } from "uuid";
import { calculateIcon } from "./utils/calculateIcon";
import { Grid } from "@mui/material";
import { useModal } from "../../../../common/components/Modal";
import { ProjectDetails } from "./components/ProjectDetails";

export function ProjectTimeline(): JSX.Element {
  const { handleOpen } = useModal();
  const projectDictionary = keyBy(projects, "title");
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
                <StyledPaper
                  elevation={3}
                  onClick={() => {
                    const project = get(projectDictionary, title, undefined);
                    if (project) {
                      handleOpen({
                        title,
                        content: <ProjectDetails project={project} />,
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
