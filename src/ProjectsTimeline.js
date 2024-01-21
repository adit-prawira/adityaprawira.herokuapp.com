import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import AlbumIcon from "@mui/icons-material/Album";
import BrushIcon from "@mui/icons-material/Brush";
import BuildIcon from "@mui/icons-material/Build";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Paper from "@mui/material/Paper";

import styles from "./styles/ProjectsTimelineStyles";

import { withStyles } from "@mui/styles";
import { v4 as uuidv4 } from "uuid";
import { Box } from "grommet";
import { Link } from "react-router-dom";
import PerfectScrollBar from "react-perfect-scrollbar";

const ProjectsTimeline = ({ classes, projects }) => {
  const handleIcon = (type) => {
    if (type === "art") {
      return (
        <TimelineDot color="info">
          <BrushIcon />
        </TimelineDot>
      );
    } else if (type === "engineering") {
      return (
        <TimelineDot color="info">
          <BuildIcon />
        </TimelineDot>
      );
    } else if (type === "game") {
      return (
        <TimelineDot color="info">
          <SportsEsportsIcon />
        </TimelineDot>
      );
    } else if (type === "music") {
      return (
        <TimelineDot color="primary">
          <AlbumIcon />
        </TimelineDot>
      );
    } else {
      return (
        <TimelineDot color="primary">
          <LaptopMacIcon />
        </TimelineDot>
      );
    }
  };
  return (
    <Box
      style={{
        height: "100%",
        padding: "2%",
        overflowY: "auto",
      }}
    >
      <PerfectScrollBar>
        <Timeline position="alternate">
          {projects.map(({ title, startPeriod, endPeriod, type }) => (
            <TimelineItem key={uuidv4()}>
              <TimelineOppositeContent>
                <Typography style={{ color: "azure" }}>
                  {startPeriod} - {endPeriod}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                {handleIcon(type)}
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
      </PerfectScrollBar>
    </Box>
  );
};

export default withStyles(styles, { withTheme: "true" })(ProjectsTimeline);
