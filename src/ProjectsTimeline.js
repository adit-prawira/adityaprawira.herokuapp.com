import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@material-ui/core/Typography";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import AlbumIcon from "@material-ui/icons/Album";
import BrushIcon from "@material-ui/icons/Brush";
import BuildIcon from "@material-ui/icons/Build";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import Paper from "@material-ui/core/Paper";

import styles from "./styles/ProjectsTimelineStyles";

import { withStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";
import { Box } from "grommet";
import { Link } from "react-router-dom";

const ProjectsTimeline = ({ classes, projects }) => {
    const handleIcon = (type) => {
        if (type === "art") {
            return (
                <TimelineDot color="primary">
                    <BrushIcon />
                </TimelineDot>
            );
        } else if (type === "engineering") {
            return (
                <TimelineDot color="secondary">
                    <BuildIcon />
                </TimelineDot>
            );
        } else if (type === "game") {
            return (
                <TimelineDot color="secondary">
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
            <Timeline align="alternate">
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
                                to={`/projects/${title
                                    .toLowerCase()
                                    .replace(/ /g, "-")}`}
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
        </Box>
    );
};

export default withStyles(styles, { withTheme: "true" })(ProjectsTimeline);
