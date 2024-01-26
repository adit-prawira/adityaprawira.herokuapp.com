import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import createStyles from "@mui/styles/createStyles";

export const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
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
    container: {
      width: "100%",
      padding: "2%",
      height: "100%",
      overflowX: "hidden",
      overflowY: "auto",
    },
    gallery: {
      padding: "1%",
    },
    imageDialog: {
      width: "100%",
    },
    dialog: {
      backgroundColor: "rgb(43, 48, 62)",
    },
    dialogFooter: { backgroundColor: "rgb(34, 40, 54)" },

    links: {
      borderRadius: "50%",
      "&:hover": {
        cursor: "pointer",
        opacity: "0.5",
      },
    },
    songLinksContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  })
);
