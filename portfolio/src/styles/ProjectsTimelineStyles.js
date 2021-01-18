const styles = (theme) => ({
    root: {
        overflowX: "visible",
        overflowY: "auto",

        backgroundColor: "rgb(43, 48, 62)",
    },

    timeline: {
        margin: "auto",
        paddingLeft: "2%",
        paddingRight: "2%",
        // border: "1px solid rgb(139, 212, 191)",
        borderRadius: "10px",
    },
    paper: {
        padding: "2%",
        margin: theme.spacing(1),
        "&:hover": {
            backgroundColor: "rgba(255,255,255,0.1)",
            cursor: "pointer",
        },
    },
    titleProject: {
        textDecoration: "none",
        color: "black",
        "&:hover": {
            color: "azure",
        },
    },
});
export default styles;
