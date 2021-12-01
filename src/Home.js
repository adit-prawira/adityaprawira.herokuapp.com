import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
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
    const [docType, setDocType] = useState("");
    const [open, setOpen] = useState(false);
    const handleClickOpen = (event, name) => {
        setDocType(event.target.innerText.toLowerCase().replace(" ", "_"));
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setPageNumber(1);
    };
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };
    return (
        <Box className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={5}>
                    <h2>Hi, I'm Aditya Prawira,</h2>
                    <Typography>
                        a master's student and also a music producer based out
                        of Melbourne, VIC.
                    </Typography>
                    <hr />
                    <div className={classes.selfImage}>
                        <img
                            src="/Images/self-cartoon.png"
                            alt="self"
                            style={{ width: "90%" }}
                        />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Calendar
                        style={{
                            width: "100%",
                            border: "2px solid rgba(255, 255, 255, 0.2)",
                            borderRadius: 10,
                        }}
                        date={new Date().toISOString()}
                    />

                    <div className={classes.buttons}>
                        <Button
                            variant="contained"
                            color="primary"
                            name="cv"
                            onClick={handleClickOpen}
                            className={classes.buttonCv}
                        >
                            My CV
                        </Button>
                        <Button
                            variant="contained"
                            name="resume"
                            onClick={handleClickOpen}
                            style={{
                                marginTop: "5%",
                                color: "grey",
                                backgroundColor: "rgb(211, 233, 166)",
                                "&:hover": {
                                    backgroundColor: "rgb(186, 225, 106)",
                                },
                            }}
                        >
                            My Resume
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} style={{ maxHeight: "68vh" }}>
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
                                        <span>Created in: {dateCreated}</span>
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
                </Grid>
                <Grid item xs={12} sm={12}>
                    <ProjectCarousel projects={projects} />
                </Grid>
            </Grid>

            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {docType === "my_cv" ? "My CV" : "My Resume"}
                </DialogTitle>
                <DialogContent dividers className={classes.dialog}>
                    <Document
                        file={`/Documents/${docType}.pdf`}
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
        </Box>
    );
}

export default Home;
