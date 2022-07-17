const styles = (theme) => ({
  container: {
    height: "100%",
    overflowY: "auto",
    padding: "2%",
  },
  box: {
    color: "white",
    padding: "2%",
    border: "1px solid white",
    borderRadius: "10px",
    boxShadow: "5px 10px white",
    "& h4": {
      color: "rgb(125,136,171)",
    },
  },
  contact: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  studies: {
    maxWidth: "40px",
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
  dialogContent: { backgroundColor: "rgb(43, 48, 62)" },

  dialogFooter: { backgroundColor: "rgb(34, 40, 54)" },
  socialMedia: { marginBottom: theme.spacing(2) },
});
export default styles;
