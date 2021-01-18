import React, { Component } from "react";
import { Box } from "grommet";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Navbar from "./Navbar";
import MyFooter from "./MyFooter";
import styles from "./styles/ArtworksStyles";
class Artworks extends Component {
    render() {
        const { classes, artworks } = this.props;
        return (
            <Box flex fill className={classes.root}>
                <Navbar />
                <Grid container spacing={3} className={classes.gallery}>
                    {artworks.map(({ title }) => (
                        <Grid
                            item
                            xs={4}
                            className={classes.imgContainer}
                            key={title}
                        >
                            <img
                                src={`/Images/${title
                                    .toLowerCase()
                                    .replace(/ /g, "-")}.png`}
                                className={classes.images}
                                alt={title}
                            />
                        </Grid>
                    ))}
                </Grid>
                <MyFooter />
            </Box>
        );
    }
}
export default withStyles(styles)(Artworks);
