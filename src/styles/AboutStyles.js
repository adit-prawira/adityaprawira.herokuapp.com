const styles = (theme) => ({
    box: {
        backgroundColor: "rgb(43, 48, 62)",
        overflowX: "hidden",
        overflowY: "auto",
        "& h4": {
            color: "rgb(125,136,171)",
        },
    },
    about: {
        // border: "1px solid black",
        padding: "1%",
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        padding: "5%",
        backgroundColor: "rgb(43, 48, 62)",
        color: "rgb(139, 212, 191)",
    },
    contact: {
        // border: "1px solid black",
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
        marginTop: "5%",
    },
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
    dialog: {
        backgroundColor: "rgb(43, 48, 62)",
    },
    send: { color: "rgb(244, 213, 138)" },
    dialogFooter: { backgroundColor: "rgb(34, 40, 54)" },
});
export default styles;
