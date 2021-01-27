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
import { particle } from "./styles/ParticleParams";
import { Box, Calendar } from "grommet";
import ProjectCarousel from "./ProjectCarousel";
import useStyles from "./styles/HomeStyles";
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
                                {artworks.map(({ title, dateCreated }) => (
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
                                                <span>
                                                    Created in: {dateCreated}
                                                </span>
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

                    <ProjectCarousel projects={projects} />
                </Grid>
            </div>
            <MyFooter />
        </Box>
    );
}

export default Home;
