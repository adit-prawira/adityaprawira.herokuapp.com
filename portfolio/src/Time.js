import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ReactPlayer from "react-player";
const styles = {
    time: {
        margin: "15%",
        position: "absolute",
        left: 0,
        right: 0,
        color: "azure",
        "& h3": {
            letterSpacing: "1em",
        },
    },
};
class Time extends Component {
    constructor(props) {
        super(props);
        this.state = { todayTime: new Date() };
    }

    componentDidMount() {
        this.timeID = setInterval(() => {
            this.setState({ todayTime: new Date() });
        }, 1000);
    }

    render() {
        const { classes } = this.props;
        let { todayTime } = this.state;
        let hours = todayTime.getHours();
        let minutes = todayTime.getMinutes();
        let seconds = todayTime.getSeconds();
        let day = todayTime.getDate();
        let month = todayTime.getMonth();
        let year = todayTime.getFullYear();
        return (
            <div className={classes.root}>
                <div className={classes.time}>
                    <Grid container spacing={3}>
                        <Grid
                            item
                            xs={12}
                            sm={8}
                            style={{ border: "solid 1px azure" }}
                        >
                            <Typography>Intro</Typography>
                            <h2>
                                Hi, I'm Aditya Prawira, a master's student and
                                also a music producer based out of Melbourne,
                                VIC.
                            </h2>
                            <h3>
                                {hours < 10 ? `0${hours}` : hours}:
                                {minutes < 10 ? `0${minutes}` : minutes}:
                                {seconds < 10 ? `0${seconds}` : seconds}
                            </h3>
                            <h3>
                                {day}/{month}/{year}
                            </h3>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            style={{ border: "solid 1px azure" }}
                        >
                            <ReactPlayer
                                playing={true}
                                height="20px"
                                width="100%"
                                loop
                                controls
                                url={[
                                    {
                                        src: "Audio/fort.mp3",
                                        type: "Audio/webm",
                                    },
                                ]}
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Time);
