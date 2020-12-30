import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
const styles = {
    // time: {
    //     margin: "auto",
    //     position: "absolute",
    //     left: 0,
    //     right: 0,
    //     textAlign: "center",
    //     letterSpacing: "1em",
    //     color: "azure",
    // },
    time: {
        textAlign: "center",
        color: "azure",
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
            <div className={classes.time}>
                <h1>Welcome to my Website</h1>
                <h2>
                    {hours < 10 ? `0${hours}` : hours}:
                    {minutes < 10 ? `0${minutes}` : minutes}:
                    {seconds < 10 ? `0${seconds}` : seconds}
                </h2>
                <p>
                    {day}/{month}/{year}
                </p>
            </div>
        );
    }
}

export default withStyles(styles)(Time);
