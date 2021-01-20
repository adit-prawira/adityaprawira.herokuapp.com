import React, { Component } from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Navbar from "./Navbar";
import MyFooter from "./MyFooter";
import { Box } from "grommet";
import styles from "./styles/AboutStyles";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
class About extends Component {
    render() {
        const { classes, educations } = this.props;
        return (
            <Box flex fill className={classes.box}>
                <Navbar />
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={8} className={classes.about}>
                            <h1>Hi, I'm Aditya Prawira.</h1>
                            <Typography>
                                I'm a master's student specialized in Robotics
                                and Mechatronics Engineering. Dedicated to learn
                                and improve autonomous systems to reduce human
                                interaction in manufacturing complex designs.
                            </Typography>
                            <br />
                            <Typography>
                                As an engineering student, discipline,
                                communication and the flexibility to work in
                                different environments are the main aspects to
                                grow in the field. I have the passion to enhance
                                workflow in building projects, and to express my
                                ideas by building/creating something.
                            </Typography>
                            <br />
                            <Typography>
                                I also love to produce music and you can find me
                                as "Azure Gaze" on your favorite music streaming
                                platforms like Spotify, Apple Music, Soundcloud,
                                iHeartRadio, and many more.
                            </Typography>
                            <br />
                            <h3>My Studies:</h3>
                            <div className={classes.studiesContainer}>
                                {educations.map(
                                    ({
                                        logo,
                                        companyName,
                                        startYear,
                                        endYear,
                                    }) => (
                                        <div
                                            className={classes.logoContainer}
                                            key={uuidv4()}
                                        >
                                            <Link
                                                to={`/about/${companyName
                                                    .toLowerCase()
                                                    .replace(/ /g, "-")}`}
                                            >
                                                <img
                                                    src={logo}
                                                    alt={companyName}
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
                        </Grid>

                        <Grid item xs={12} sm={4} className={classes.contact}>
                            <h4 className={classes.contactLabel}>
                                GET IN TOUCH
                            </h4>
                            <Typography>adityaprawira96@gmail.com</Typography>
                            <Typography>(+61) 402 555 502</Typography>
                            <h4 className={classes.contactLabel}>
                                SOCIAL MEDIA
                            </h4>
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
                <MyFooter />
            </Box>
        );
    }
}

export default withStyles(styles)(About);
