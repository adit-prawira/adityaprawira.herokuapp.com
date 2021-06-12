import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    container: {
        color: "azure",
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
    gridListContainer: {
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
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        overflowX: "hidden",
        overflowY: "auto",
    },
    cv: {
        marginTop: "50%",
    },
    buttons: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
    },
    buttonCv: {
        marginTop: "5%",
    },
    buttonResume: {
        marginTop: "5%",
        color: "grey",
        backgroundColor: "rgb(211, 233, 166)",
        "&:hover": { backgroundColor: "rgb(186, 225, 106)" },
    },
    dialogFooter: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgb(34, 40, 54)",
    },
    pageNav: {
        color: "azure",
    },
}));

export default useStyles;
