import React, { useState } from "react";
import { Box } from "grommet";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Navbar from "./Navbar";
import MyFooter from "./MyFooter";
import styles from "./styles/ArtworksStyles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const Artworks = ({ classes, artworks }) => {
    const [open, setOpen] = useState(false);
    const [art, setArt] = useState({});
    const handleClickOpen = (event) => {
        const inputTitle = event.target.alt;
        setArt(findArtwork(inputTitle));
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const findArtwork = (inputTitle) => {
        return artworks.filter((art) => art.title === inputTitle)[0];
    };

    return (
        <Box flex fill className={classes.container}>
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
                            onClick={handleClickOpen}
                        />
                    </Grid>
                ))}
            </Grid>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {art.title}
                </DialogTitle>
                <DialogContent dividers className={classes.dialog}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <img
                                src={`/Images/${
                                    art.title
                                        ? art.title
                                              .toLowerCase()
                                              .replace(/ /g, "-")
                                        : ""
                                }.png`}
                                alt={art.title}
                                className={classes.imageDialog}
                            />
                            <hr style={{ color: "azure" }} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography gutterBottom>
                                <label>Album title: </label>
                                <span> {art.title}</span>
                            </Typography>
                            <Typography gutterBottom>
                                <label>Artwork Created: </label>
                                <span> {art.dateCreated}</span>
                            </Typography>
                            <Typography gutterBottom>
                                <label>Release Date: </label>
                                <span> {art.releaseDate}</span>
                            </Typography>
                            <Typography gutterBottom>
                                <label>Tracks: </label>
                                <span> {art.tracksNumber}</span>
                            </Typography>

                            {open && (
                                <ul>
                                    {art.trackTitles.map((title) => (
                                        <li>{`"${title}"`}</li>
                                    ))}
                                </ul>
                            )}
                            <a href={art.spotify}>
                                <img
                                    src="/Images/spotify.ico"
                                    alt={art.spotify}
                                    className={classes.links}
                                />
                            </a>
                            <a href={art.appleMusic}>
                                <img
                                    src="/Images/applemusic.ico"
                                    alt={art.appleMusic}
                                    className={classes.links}
                                />
                            </a>
                            <a href={art.soundCloud}>
                                <img
                                    src="/Images/soundcloud.ico"
                                    alt={art.soundCloud}
                                    className={classes.links}
                                />
                            </a>
                            <Typography gutterBottom></Typography>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions className={classes.dialogFooter}>
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        color="primary"
                    >
                        Back
                    </Button>
                </DialogActions>
            </Dialog>
            <MyFooter />
        </Box>
    );
};

export default withStyles(styles)(Artworks);
