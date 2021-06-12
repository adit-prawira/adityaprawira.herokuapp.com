import React, { useState } from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import styles from "./styles/AboutStyles";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import emailjs from "emailjs-com";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

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

const About = ({ classes, educations }) => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_vtrnj6c",
                "template_s1l81ls",
                e.target,
                "user_KIPqhGTfzH2WY8fR04z5X"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
        setOpen(false);
    };
    return (
        <Box className={classes.box}>
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={8}>
                        <h1>Hi, I'm Aditya Prawira.</h1>
                        <Typography>
                            I'm a master's student specialized in Robotics and
                            Mechatronics Engineering. Dedicated to learn and
                            improve autonomous systems to reduce human
                            interaction in manufacturing complex designs.
                        </Typography>
                        <br />
                        <Typography>
                            As an engineering student, discipline, communication
                            and the flexibility to work in different
                            environments are the main aspects to grow in the
                            field. I have the passion to enhance workflow in
                            building projects, and to express my ideas by
                            building/creating something.
                        </Typography>
                        <br />
                        <Typography>
                            I also produce music and you can find me as "Azure
                            Gaze" on your favorite music streaming platforms
                            like Spotify, Apple Music, Soundcloud, iHeartRadio,
                            and many more.
                        </Typography>
                        <br />
                        <h3>My Studies:</h3>
                        <div className={classes.studiesContainer}>
                            {educations.map(
                                ({ logo, title, startYear, endYear }) => (
                                    <div
                                        className={classes.logoContainer}
                                        key={uuidv4()}
                                    >
                                        <Link
                                            to={`/about/${title
                                                .toLowerCase()
                                                .replace(/ /g, "-")}`}
                                        >
                                            <img
                                                src={logo}
                                                alt={title}
                                                className={classes.studies}
                                            />
                                        </Link>

                                        <Typography>
                                            {startYear} - {endYear}
                                        </Typography>
                                    </div>
                                )
                            )}
                        </div>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleClickOpen}
                        >
                            Email Me
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={4} className={classes.contact}>
                        <h4 className={classes.contactLabel}>GET IN TOUCH</h4>
                        <Typography>adityaprawira96@gmail.com</Typography>
                        <Typography>(+61) 402 555 502</Typography>
                        <h4 className={classes.contactLabel}>SOCIAL MEDIA</h4>
                        <div>
                            <a href="https://www.instagram.com/azuregazemusic/">
                                <InstagramIcon
                                    color="secondary"
                                    fontSize="large"
                                />
                            </a>
                            <a href="https://www.facebook.com/azuregazemusic/">
                                <FacebookIcon
                                    color="secondary"
                                    fontSize="large"
                                />
                            </a>
                            <a href="https://www.linkedin.com/in/aditya-prawira/">
                                <LinkedInIcon
                                    color="secondary"
                                    fontSize="large"
                                />
                            </a>
                            <a href="https://github.com/adit-prawira">
                                <GitHubIcon
                                    color="secondary"
                                    fontSize="large"
                                />
                            </a>
                        </div>
                        <img
                            src="Images/myphoto.jpg"
                            alt="myphoto"
                            className={classes.profile}
                        />
                    </Grid>
                </Grid>
            </div>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Email Me
                </DialogTitle>
                <DialogContent dividers className={classes.dialog}>
                    <form onSubmit={sendEmail}>
                        <div className="row mx-auto">
                            <input
                                type="text"
                                className="fom-control mx-auto mb-3"
                                placeholder="Name"
                                name="name"
                                required
                            />
                            <input
                                type="email"
                                className="fom-control mx-auto mb-3"
                                placeholder="Email Address"
                                name="email"
                                required
                            />
                            <input
                                type="text"
                                className="fom-control mx-auto mb-3"
                                placeholder="Subject"
                                name="subject"
                            />
                            <textarea
                                className="form-control mx-auto mb-3"
                                id=""
                                cols="30"
                                rows="8"
                                placeholder="Messages"
                                name="message"
                                required
                            ></textarea>

                            <Button
                                type="submit"
                                aria-label="Next"
                                variant="outlined"
                                color="secondary"
                            >
                                <Typography className={classes.send}>
                                    Send Message
                                </Typography>
                            </Button>
                        </div>
                    </form>
                </DialogContent>
                <DialogActions className={classes.dialogFooter}>
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        color="secondary"
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default withStyles(styles)(About);
