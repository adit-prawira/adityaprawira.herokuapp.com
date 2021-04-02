import React, { useState } from "react";
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
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { withStyles } from "@material-ui/core/styles";
import PdfControlPanel from "./PdfControlPanel";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const DialogTitle = (props) => {
    const classes = useStyles();
    const { children, onClose, ...other } = props;
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
};

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

function Home({ artworks, projects }) {
    const classes = useStyles();
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };
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
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Calendar
                            size="small"
                            date={new Date().toISOString()}
                            className="mx-auto mb-3"
                        />
                        <div style={{ width: "100%" }} className="row">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleClickOpen}
                                className="btn btn-lg btn-block mx-auto"
                            >
                                My CV
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div className={classes.gridListContainer}>
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
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    My CV
                </DialogTitle>
                <DialogContent dividers className={classes.dialog}>
                    <Document
                        file="/Documents/my_cv.pdf"
                        onLoadSuccess={onDocumentLoadSuccess}
                        className={classes.cv}
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>
                </DialogContent>
                <DialogActions className={classes.dialogFooter}>
                    <PdfControlPanel
                        pageNumber={pageNumber}
                        numPages={numPages}
                        setPageNumber={setPageNumber}
                        style={{ alignContent: "flex-end" }}
                    />
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        color="secondary"
                    >
                        Go Back
                    </Button>
                </DialogActions>
            </Dialog>
            <MyFooter />
        </Box>
    );
}

export default Home;
