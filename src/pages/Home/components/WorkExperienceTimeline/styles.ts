import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import createStyles from "@mui/styles/createStyles";

export const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      width: "100%",
      overflowX: "visible",
      overflowY: "auto",
    },

    timeline: {
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
  })
);
