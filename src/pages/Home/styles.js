import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    color: "azure",
    height: "100%",
    overflowY: "auto",
    overflowX: "hidden",
    padding: "2%",
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
  dialogContent: {
    backgroundColor: "rgb(43, 48, 62)",

    overflow: "hidden",
  },
  documentContainer: {
    display: "flex",
    justifyContent: "center",
    maxHeight: "70vh",
    overflow: "auto",
  },
  scroll: { overflow: "auto" },
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
  artContainer: { maxHeight: "60vh", overflow: "auto" },
  pdfControlPanel: { alignContent: "flex-end" },
}));

export default useStyles;
