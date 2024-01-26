import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import createStyles from "@mui/styles/createStyles";

export const useStyles = makeStyles<Theme>(() =>
  createStyles({
    image: {
      width: "100%",
      borderRadius: "10px",
      boxShadow: "10px 10px white",
    },
    icon: {
      "&:hover": {
        cursor: "pointer",
        boxShadow: "10px 10px white",
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
