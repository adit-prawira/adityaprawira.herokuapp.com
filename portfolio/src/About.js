import React, { Component } from "react";

import "./Content.css";

class About extends Component {
    render() {
        return (
            <section
                style={{ width: "100%", padding: "10%", textAlign: "center" }}
            >
                <h1>About</h1>
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
            </section>
        );
    }
}

export default About;
