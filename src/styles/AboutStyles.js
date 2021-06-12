const styles = (theme) => ({
    box: {
        color: "white",
        border: "1px solid white",
        "& h4": {
            color: "rgb(125,136,171)",
        },
    },
    about: {},
    container: {
        border: "1px solid white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(43, 48, 62)",
        color: "rgb(139, 212, 191)",
    },
    contact: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },

    studies: {
        borderRadius: "50%",
        "&:hover": {
            cursor: "pointer",
            opacity: "0.5",
        },
    },
    studiesContainer: {
        display: "flex",
        flexDirection: "row",
    },
    logoContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "2%",
    },
    profile: {
        width: "50%",
        border: "solid 2px black",
        borderRadius: "50%",
    },
    root: {
        backgroundColor: "rgb(34, 40, 54)",
        color: "azure",
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    dialog: {
        backgroundColor: "rgb(43, 48, 62)",
    },
    send: { color: "rgb(244, 213, 138)" },
    dialogFooter: { backgroundColor: "rgb(34, 40, 54)" },
});
export default styles;
