const styles = {
    root: {
        overflowX: "hidden",
        overflowY: "auto",
        backgroundColor: "rgb(43, 48, 62)",
    },
    gallery: {
        padding: "1%",
    },
    images: {
        width: "100%",
        "&:hover": {
            boxShadow: "0 0.5em 0.5em -0.4em black",
            transform: "translateY(-0.25em)",
            cursor: "pointer",
        },
    },
    imgContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
};
export default styles;
