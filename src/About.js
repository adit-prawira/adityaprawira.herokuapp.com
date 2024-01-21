import React, { useState, useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { withStyles } from "@mui/styles";
import styles from "./styles/AboutStyles";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import emailjs from "emailjs-com";
import SendIcon from "@mui/icons-material/Send";
const About = ({ classes, educations, workExperiences }) => {
  const form = useRef();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_vtrnj6c",
        "template_s1l81ls",
        form.current,
        "user_KIPqhGTfzH2WY8fR04z5X"
      );
      e.target.reset();
      setOpen(false);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Box className={classes.container}>
      <Box className={classes.box}>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              <h1>Hi, I'm Aditya Prawira.</h1>
              <Typography>
                I'm a master's student specialized in Robotics and Mechatronics
                Engineering. Dedicated to learn and improve autonomous systems
                to reduce human interaction in manufacturing complex designs.
              </Typography>
              <br />
              <Typography>
                As an engineering student, discipline, communication and the
                flexibility to work in different environments are the main
                aspects to grow in the field. I have the passion to enhance
                workflow in building projects, and to express my ideas by
                building/creating something.
              </Typography>
              <br />
              <Typography>
                I also produce music and you can find me as "Azure Gaze" on your
                favorite music streaming platforms like Spotify, Apple Music,
                Soundcloud, iHeartRadio, and many more.
              </Typography>
              <br />
              <Typography variant="h4">EDUCATIONS</Typography>
              <div className={classes.studiesContainer}>
                {educations.map(({ logo, title, startYear, endYear }) => (
                  <div className={classes.logoContainer} key={uuidv4()}>
                    <Link
                      to={`/about/educations/${title
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                    >
                      <img src={logo} alt={title} className={classes.studies} />
                    </Link>

                    <Typography>
                      {startYear} - {endYear}
                    </Typography>
                  </div>
                ))}
              </div>
              <Typography variant="h4">WORK EXPERIENCES</Typography>
              <div className={classes.studiesContainer}>
                {workExperiences.map(({ logo, title, startYear, endYear }) => (
                  <div className={classes.logoContainer} key={uuidv4()}>
                    <Link
                      to={`/about/work-experiences/${title
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                    >
                      <img src={logo} alt={title} className={classes.studies} />
                    </Link>

                    <Typography>
                      {startYear} - {endYear}
                    </Typography>
                  </div>
                ))}
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
              <Typography variant="h4" className={classes.contactLabel}>
                GET IN TOUCH
              </Typography>
              <Typography variant="body1">adityaprawira96@gmail.com</Typography>
              <Typography variant="body1" gutterBottom>
                (+61) 402 555 502
              </Typography>
              <Typography variant="h4" className={classes.contactLabel}>
                SOCIAL MEDIA
              </Typography>
              <div className={classes.socialMedia}>
                <a href="https://www.instagram.com/azuregazemusic/">
                  <InstagramIcon color="secondary" fontSize="large" />
                </a>
                <a href="https://www.facebook.com/azuregazemusic/">
                  <FacebookIcon color="secondary" fontSize="large" />
                </a>
                <a href="https://www.linkedin.com/in/aditya-prawira/">
                  <LinkedInIcon color="secondary" fontSize="large" />
                </a>
                <a href="https://github.com/adit-prawira">
                  <GitHubIcon color="secondary" fontSize="large" />
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
          className={classes.dialog}
        >
          <DialogTitle id="customized-dialog-title" className={classes.root}>
            Email Me
          </DialogTitle>
          <DialogContent dividers className={classes.dialogContent}>
            <form onSubmit={sendEmail} ref={form}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    type="text"
                    placeholder="Name"
                    name="name"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  {" "}
                  <TextField
                    variant="outlined"
                    fullWidth
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  {" "}
                  <TextField
                    variant="outlined"
                    fullWidth
                    type="text"
                    placeholder="Subject"
                    name="subject"
                  />
                </Grid>
                <Grid item xs={12}>
                  {" "}
                  <TextField
                    variant="outlined"
                    fullWidth
                    id=""
                    multiline
                    rows={10}
                    placeholder="Messages"
                    name="message"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  {" "}
                  <Button
                    type="submit"
                    aria-label="Next"
                    variant="contained"
                    color="primary"
                    startIcon={<SendIcon />}
                    fullWidth
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </DialogContent>
          <DialogActions className={classes.dialogFooter}>
            <Button onClick={handleClose} variant="contained" color="secondary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default withStyles(styles)(About);
