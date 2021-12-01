const styles = (theme) => ({
    root: {
        margin: 0,
        backgroundColor: "rgb(34, 40, 54)",
        color: "azure",
        padding: theme.spacing(2),
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    container: {
        width: "100%",
        padding: "2%",
        height: "100%",
        overflowX: "hidden",
        overflowY: "auto",
        border: "1px solid white",
    },
    gallery: {
        padding: "1%",
    },
    imageDialog: {
        width: "100%",
    },
    dialog: {
        backgroundColor: "rgb(43, 48, 62)",
        color: "rgb(244, 213, 138)",
        "& label": { color: "rgb(229, 116, 133)" },
    },
    images: {
        width: "80%",
        "&:hover": {
            boxShadow: "0 0.5em 0.5em -0.4em black",
            transform: "translateY(-0.25em)",
            cursor: "pointer",
        },
    },
    dialogFooter: { backgroundColor: "rgb(34, 40, 54)" },
    imgContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    links: {
        borderRadius: "50%",
        "&:hover": {
            cursor: "pointer",
            opacity: "0.5",
        },
    },
});
export default styles;
