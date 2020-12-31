import React, { Component } from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Paper from "@material-ui/core/Paper";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import AlbumIcon from "@material-ui/icons/Album";
import BrushIcon from "@material-ui/icons/Brush";
import BuildIcon from "@material-ui/icons/Build";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import SeeMore from "./SeeMore";

const styles = {
    timelineContainer: {
        borderRadius: "10px",
        backgroundColor: "rgba(240,255,255,0.4)",
    },
    paper: {
        padding: "1%",
    },
};

export default withStyles(styles)(
    class ProjectsTimeline extends Component {
        handleIcon(type) {
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
        }
        render() {
            const { classes, projects } = this.props;

            return (
                <Timeline
                    align="alternate"
                    className={classes.timelineContainer}
                >
                    {projects.map(
                        ({
                            title,
                            startPeriod,
                            endPeriod,
                            type,
                            descriptions,
                        }) => (
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography color="textSecondary">
                                        {startPeriod} - {endPeriod}
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    {this.handleIcon(type)}
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper
                                        elevation={3}
                                        className={classes.paper}
                                    >
                                        <Typography>
                                            <b>{title}</b>
                                        </Typography>
                                        <SeeMore descriptions={descriptions} />
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                        )
                    )}
                </Timeline>
            );
        }
    }
);
