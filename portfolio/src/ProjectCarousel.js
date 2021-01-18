import React from "react";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { Link } from "react-router-dom";
import useStyles from "./styles/ProjectCarouselStyles";
export default function ProjectCarousel({ projects }) {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={12}>
            <div className={classes.bottomCarousel}>
                <GridList className={classes.gridListHorizontal} cols={2.5}>
                    {projects.map(({ title, image }) => (
                        <GridListTile key={title}>
                            <img src={image} alt={title} />

                            <GridListTileBar
                                title={
                                    <Link
                                        to={`/projects/${title
                                            .toLowerCase()
                                            .replace(/ /g, "-")}`}
                                        className={classes.titleProject}
                                    >
                                        {title}
                                    </Link>
                                }
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
    );
}
