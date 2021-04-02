const styles = {
    root: {
        overflowX: "hidden",
        overflowY: "auto",
        color: "azure",
        backgroundColor: "rgb(43, 48, 62)",
    },
    content: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2%",
        "& label": {
            color: "rgb(139, 212, 191)",
        },
        "& img": {
            width: "80%",
        },
    },
    container: {
        border: "1px solid rgb(125,136,171)",
        borderRadius: "10px",
        backgroundColor: "rgb(34, 40, 54)",
        padding: "1%",
    },
    media: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
};
export default styles;
