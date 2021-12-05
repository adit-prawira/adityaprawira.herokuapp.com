import React from "react";
import Particles from "react-tsparticles";
const params = {
    fullScreen: {
        enable: true,
        zIndex: 0,
    },
    particles: {
        number: {
            value: 180,
            density: {
                enable: true,
                value_area: 2000,
            },
        },
        line_linked: {
            enable: true,
            distance: 120,
            color: "rgba(200, 200, 200,1)",
            opacity: 0.6,
            width: 1,
        },
        opacity: {
            value: 0,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.3,
                sync: true,
            },
        },
        move: {
            enable: true,
            speed: 1,
        },
        size: {
            value: 3,
        },
        fps_limit: 60,
        color: { value: "rgba(200, 200, 200,1)" },
    },
    retina_detect: true,
};

const CustomParticle = () => {
    return (
        <Particles
            options={params}
            style={{
                position: "absolute",
                zIndex: -1,
                left: 0,
                right: 0,
                bottom: 0,
                top: 0,
                flexGrow: 1,
            }}
        />
    );
};

export default CustomParticle;
