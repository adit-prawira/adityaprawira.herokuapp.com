import React, { Component } from "react";
import "./Time.css";

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
        let { todayTime } = this.state;
        let hours = todayTime.getHours();
        let minutes = todayTime.getMinutes();
        let seconds = todayTime.getSeconds();
        let day = todayTime.getDate();
        let month = todayTime.getMonth();
        let year = todayTime.getFullYear();
        return (
            <div className="Time-position">
                <div className="Time">
                    <h1>
                        {hours < 10 ? `0${hours}` : hours}:
                        {minutes < 10 ? `0${minutes}` : minutes}:
                        {seconds < 10 ? `0${seconds}` : seconds}
                    </h1>
                </div>
                <div className="Date">
                    <p>
                        {day}/{month}/{year}
                    </p>
                </div>
            </div>
        );
    }
}

export default Time;
