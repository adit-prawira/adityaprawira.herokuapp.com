import React from "react";
import Grid from "@material-ui/core/Grid";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import useStyles from "./styles/ProjectCarouselStyles";
import { Link } from "react-router-dom";
export default function ProjectCarousel({ projects }) {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={12}>
            <div className={classes.bottomCarousel}>
                <ImageList className={classes.gridListHorizontal} cols={2.5}>
                    {projects.map(({ title, image }) => (
                        <ImageListItem key={title}>
                            <img src={image} alt={title} />
                            <ImageListItemBar
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
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </Grid>
    );
}
