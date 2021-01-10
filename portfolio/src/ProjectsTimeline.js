import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import AlbumIcon from "@material-ui/icons/Album";
import BrushIcon from "@material-ui/icons/Brush";
import BuildIcon from "@material-ui/icons/Build";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import SeeMore from "./SeeMore";
import { v4 as uuidv4 } from "uuid";

const styles = {
    timelineContainer: {
        borderRadius: "10px",
        backgroundColor: "rgba(240,255,255,0.4)",
    },
};

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
        <Timeline align="alternate" className={classes.timelineContainer}>
            {projects.map(
                (
                    { title, startPeriod, endPeriod, type, descriptions },
                    index
                ) => (
                    <TimelineItem key={uuidv4()}>
                        <TimelineOppositeContent>
                            <Typography color="textSecondary">
                                {startPeriod} - {endPeriod}
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            {handleIcon(type)}
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <SeeMore
                                descriptions={descriptions}
                                index={index}
                                title={title}
                            />
                        </TimelineContent>
                    </TimelineItem>
                )
            )}
        </Timeline>
    );
};

export default withStyles(styles)(ProjectsTimeline);
