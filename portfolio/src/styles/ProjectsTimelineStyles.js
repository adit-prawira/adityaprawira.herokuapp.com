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
        borderRadius: "10px",
    },
    paper: {
        padding: "1%",
        margin: theme.spacing(1),
        "&:hover": {
            backgroundColor: "rgba(255,255,255,0.1)",
            cursor: "pointer",
            color: "azure",
        },
    },
    titleProject: {
        textDecoration: "none",
        color: "black",
    },
});
export default styles;
