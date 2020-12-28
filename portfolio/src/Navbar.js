import React, { Component } from "react";
import Particles from "react-particles-js";
import Time from "./Time";
import "./Navbar.css";
import { particle } from "./styles/ParticleStyles";

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <Time className="Navbar-time" />
                {/* <About /> */}
                <Particles className="Navbar-particle" params={particle} />
            </div>
        );
    }
}

export default Navbar;
