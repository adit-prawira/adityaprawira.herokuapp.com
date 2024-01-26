import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import createStyles from "@mui/styles/createStyles";

export const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    box: {
      color: "white",
      padding: "2%",
      border: "1px solid white",
      borderRadius: "10px",
      boxShadow: "5px 10px white",
      marginBottom: "10px",
      marginRight: "5px",
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
  })
);
