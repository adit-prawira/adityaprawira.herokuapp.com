import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
    container: {
        color: "azure",
        height: "100%",
        overflowY: "auto",
        overflowX: "hidden",
        padding: "2%",
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
        height: "100%",
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
        height: "100%",
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
        backgroundColor: "#7db8a2",
        "&:hover": {
            backgroundColor: "#639482",
            transition: "background-color 0.3s ease-in-out",
        },
    },
    dialogFooter: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgb(34, 40, 54)",
    },
    pageNav: {
        color: "azure",
    },
    calendar: {
        border: "2px solid rgba(255, 255, 255, 0.2)",
        borderRadius: 10,
    },
    calendarContainer: {
        overflow: "auto",
    },
    calendarSubContainer: {
        height: "50vh",
        width: "100%",
    },
    artContainer: { maxHeight: "68vh" },
    pdfControlPanel: { alignContent: "flex-end" },
    image: { width: "90%" },
}));

export default useStyles;
