import React, { Component } from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
const styles = {
    root: {
        width: "100%",
        padding: "15%",
    },
    "& Typography": {
        marginBottom: "3%",
    },
};
class About extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        style={{ border: "solid 1px azure" }}
                    >
                        <h1>Hi, I'm Aditya Prawira.</h1>
                        <Typography>
                            I'm a master's student specialized in Robotics and
                            Mechatronics Engineering. Dedicated to learn and
                            improve autonomous systems to reduce human
                            interaction in manufacturing complex designs.
                        </Typography>
                        <Typography>
                            As an engineering student, discipline, communication
                            and the flexibility to work in different
                            environments are the main aspects to grow in the
                            field. I have the passion to enhance workflow in
                            building projects, and to express my ideas by
                            building/creating something.
                        </Typography>
                        <Typography>
                            I also love to produce music and you can find me as
                            "Azure Gaze" on your favorite music streaming
                            platforms like Spotify, Apple Music, Soundcloud,
                            iHeartRadio, and many more.
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={6}
                        style={{ border: "solid 1px azure" }}
                    >
                        <h3 color="textSecondary">GET IN TOUCH</h3>
                        <Typography>
                            <a>adityaprawira96@gmail.com</a>
                        </Typography>
                        <Typography>
                            <a>(+61) 402 555 502</a>
                        </Typography>
                        <h3 color="textSecondary">SOCIAL MEDIA</h3>
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
                            style={{
                                width: "30%",
                                border: "solid 2px black",
                                borderRadius: "50%",
                                marginTop: "5%",
                            }}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(About);
