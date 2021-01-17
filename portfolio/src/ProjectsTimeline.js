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
// import ProjectDetails from "./ProjectDetails";
import Paper from "@material-ui/core/Paper";
import Navbar from "./Navbar";
import MyFooter from "./MyFooter";
import { v4 as uuidv4 } from "uuid";
import { Box } from "grommet";
const styles = (theme) => ({
    root: {
        overflowY: "auto",
        overflowX: "hidden",
        backgroundColor: "rgb(43, 48, 62)",
    },
    timelineContainer: { padding: "2%" },
    timeline: {
        margin: "auto",
        border: "1px solid rgb(139, 212, 191)",
        borderRadius: "10px",
    },
    paper: {
        padding: "2%",
        margin: theme.spacing(1),
        "&:hover": {
            backgroundColor: "rgba(255,255,255,0.1)",
        },
    },
});

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
        <Box flex fill className={classes.root}>
            <Navbar />
            <div flex fill className={classes.timelineContainer}>
                <Timeline align="alternate" className={classes.timeline}>
                    {projects.map(
                        (
                            {
                                title,
                                startPeriod,
                                endPeriod,
                                type,
                                descriptions,
                            },
                            index
                        ) => (
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
                                    <Paper
                                        elevation={3}
                                        className={classes.paper}
                                    >
                                        {title}
                                    </Paper>
                                    {/* <SeeMore
                                    descriptions={descriptions}
                                    index={index}
                                    title={title}
                                /> */}
                                </TimelineContent>
                            </TimelineItem>
                        )
                    )}
                </Timeline>
            </div>

            <MyFooter />
        </Box>
    );
};

export default withStyles(styles, { withTheme: "true" })(ProjectsTimeline);
