export const particles = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 2000,
            },
        },
        line_linked: {
            enable: true,
            opacity: 0.6,
        },
        move: {
            direction: "right",
            speed: 0.5,
        },
        size: {
            value: 2,
        },
        opacity: {
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
            },
        },
    },
    interactivity: {
        events: {
            onclick: {
                enable: true,
                mode: "push",
            },
        },
        modes: {
            push: {
                particles_nb: 1,
            },
        },
    },

    retina_detect: true,
};
