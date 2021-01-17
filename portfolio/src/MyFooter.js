import React, { Component } from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Footer } from "grommet";
import { withStyles } from "@material-ui/core/styles";
const styles = {
    footer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
    },
};

class MyFooter extends Component {
    render() {
        return (
            <Footer background="brand" pad="small" justify="end">
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
            </Footer>
        );
    }
}

export default withStyles(styles)(MyFooter);
