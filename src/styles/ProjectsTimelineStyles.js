const styles = (theme) => ({
    root: {
        width: "100%",
        border: "1px solid white",
        overflowX: "visible",
        overflowY: "auto",
    },

    timeline: {
        paddingLeft: "2%",
        paddingRight: "2%",
        borderRadius: "10px",
        // border: "1px solid azure",
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
