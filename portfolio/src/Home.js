import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "./Navbar";
import Particles from "react-particles-js";
import MyFooter from "./MyFooter";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { makeStyles } from "@material-ui/core/styles";
import { particle } from "./styles/ParticleParams";
import { Box, Calendar } from "grommet";

const useStyles = makeStyles((theme) => ({
    container: {
        color: "azure",
        overflowX: "hidden",
        overflowY: "auto",
        backgroundColor: "rgb(43, 48, 62)",
    },
    selfImage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    time: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    particleContainer: {
        height: "5%",
    },
    content: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingBottom: "5%",
    },
    link: {
        textDecoration: "none",
        fontWeight: "bold",
        color: "azure",
    },
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: "100%",
        height: 450,
    },
    icon: {
        color: "rgba(255, 255, 255, 0.54)",
    },
    bottomCarousel: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        borderRadius: "5px",
        backgroundColor: "none",
    },
    gridListHorizontal: {
        flexWrap: "nowrap",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: "translateZ(0)",
    },
    titleProject: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
}));
function Home({ artworks, projects }) {
    const classes = useStyles();
    return (
        <Box flex fill className={classes.container}>
            <Navbar />
            <div className={classes.particleContainer}>
                <Particles params={particle} />
            </div>
            <div className={classes.content}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={5}>
                        <h2>Hi, I'm Aditya Prawira,</h2>
                        <Typography>
                            a master's student and also a music producer based
                            out of Melbourne, VIC.
                        </Typography>
                        <hr />
                        <div className={classes.selfImage}>
                            {" "}
                            <img
                                src="/Images/self-cartoon.png"
                                alt="self"
                                style={{ width: "90%" }}
                            />
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={3}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Calendar
                            size="small"
                            date={new Date().toISOString()}
                            // onSelect={(date) => {}}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div className={classes.root}>
                            <GridList className={classes.gridList}>
                                {artworks.map(({ title, date }) => (
                                    <GridListTile key={title}>
                                        <img
                                            src={`/Images/${title
                                                .toLowerCase()
                                                .replace(/ /g, "-")}.png`}
                                            alt={title}
                                        />
                                        <GridListTileBar
                                            title={title}
                                            subtitle={
                                                <span>Created in: {date}</span>
                                            }
                                            actionIcon={
                                                <IconButton
                                                    aria-label={`info about ${title}`}
                                                    className={classes.icon}
                                                >
                                                    <InfoIcon />
                                                </IconButton>
                                            }
                                        />
                                    </GridListTile>
                                ))}
                            </GridList>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <div className={classes.bottomCarousel}>
                            <GridList
                                className={classes.gridListHorizontal}
                                cols={2.5}
                            >
                                {projects.map(({ title, image }) => (
                                    <GridListTile key={title}>
                                        <img src={image} alt={title} />

                                        <GridListTileBar
                                            title={title}
                                            classes={{
                                                root: classes.titleBar,
                                                title: classes.title,
                                            }}
                                        />
                                    </GridListTile>
                                ))}
                            </GridList>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <MyFooter />
        </Box>
    );
}

export default Home;
