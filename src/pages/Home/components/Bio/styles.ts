import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import createStyles from "@mui/styles/createStyles";

export const useStyles = makeStyles<Theme>(() =>
  createStyles({
    imageContainer: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    image: { width: "100%" },
  })
);
