import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    container: {
        color: "azure",
        overflowX: "hidden",
        overflowY: "auto",
        backgroundColor: "rgb(43, 48, 62)",
    },
    selfImage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    time: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    particleContainer: {
        height: "5%",
    },
    content: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingBottom: "5%",
    },
    link: {
        textDecoration: "none",
        fontWeight: "bold",
        color: "azure",
    },
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: "100%",
        height: 450,
    },
    icon: {
        color: "rgba(255, 255, 255, 0.54)",
    },
}));

export default useStyles;
