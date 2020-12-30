import React, { Component } from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { withStyles } from "@material-ui/core/styles";
const styles = {
    about: { width: "100%", padding: "10%", textAlign: "center" },
    socialMedia: {
        marginTop: "2%",
    },
};
class About extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.about}>
                <h1>About Me</h1>
                <h3>
                    Hi, I'm Aditya Prawira. I'm a master's student specialized
                    in Robotics and Mechatronics Engineering. Dedicated to learn
                    and improve autonomous systems to reduce human interaction
                    in manufacturing complex designs.{" "}
                </h3>

                <img
                    src="Images/myphoto.jpg"
                    alt="myphoto"
                    style={{
                        width: "20%",
                        border: "solid 2px black",
                        borderRadius: "50%",
                    }}
                />
                <div className={classes.socialMedia}>
                    <a href="https://www.instagram.com/azuregazemusic/">
                        <InstagramIcon color="primary" fontSize="large" />
                    </a>
                    <a href="https://www.facebook.com/azuregazemusic/">
                        <FacebookIcon color="primary" fontSize="large" />
                    </a>
                    <a href="https://www.linkedin.com/in/aditya-prawira/">
                        <LinkedInIcon color="primary" fontSize="large" />
                    </a>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(About);
