import React, { Component } from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Footer } from "grommet";

class MyFooter extends Component {
    render() {
        return (
            <Footer
                pad="small"
                justify="end"
                style={{
                    backgroundColor: "rgb(34, 40, 54)",
                    marginTop: "100vh",
                }}
                className="footer mt-auto"
            >
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

export default MyFooter;
