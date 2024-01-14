import React, { useState } from "react";
import { Box } from "grommet";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import styles from "./styles/ArtworksStyles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { v4 as uuid } from "uuid";

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
    <Box className={classes.container}>
      <Grid container spacing={3}>
        {artworks.map(({ title }) => (
          <Grid item xs={4} className={classes.imgContainer} key={uuid()}>
            <img
              src={`/Images/${title.toLowerCase().replace(/ /g, "-")}.png`}
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
          <Typography variant="subtitle1">{art.title}</Typography>
        </DialogTitle>
        <DialogContent dividers className={classes.dialog}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <img
                src={`/Images/${
                  art.title ? art.title.toLowerCase().replace(/ /g, "-") : ""
                }.png`}
                alt={art.title}
                className={classes.imageDialog}
              />
              <hr style={{ color: "azure" }} />
              <div className={classes.songLinksContainer}>
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
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">Album Title:</Typography>
              <Typography gutterBottom variant="body1">
                {art.title}
              </Typography>
              <Typography variant="subtitle1">Artwork Created:</Typography>
              <Typography gutterBottom variant="body1">
                {art.dateCreated}
              </Typography>
              <Typography variant="subtitle1">Release Date:</Typography>
              <Typography gutterBottom variant="body1">
                {art.releaseDate}
              </Typography>
              <Typography variant="subtitle1">Track List:</Typography>
              {open && (
                <ul>
                  {art.trackTitles.map((title) => (
                    <li key={uuid()}>
                      <Typography variant="body1">{title}</Typography>
                    </li>
                  ))}
                </ul>
              )}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className={classes.dialogFooter}>
          <Button onClick={handleClose} variant="contained" color="primary">
            Back
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default withStyles(styles)(Artworks);
