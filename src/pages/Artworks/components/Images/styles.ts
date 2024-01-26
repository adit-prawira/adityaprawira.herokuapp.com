import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import createStyles from "@mui/styles/createStyles";

export const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    image: {
      width: "80%",
      "&:hover": {
        boxShadow: "0 0.5em 0.5em -0.4em black",
        transform: "translateY(-0.25em)",
        cursor: "pointer",
      },
    },
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);
