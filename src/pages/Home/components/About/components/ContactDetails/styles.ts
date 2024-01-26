import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import createStyles from "@mui/styles/createStyles";

export const useStyles = makeStyles<Theme>(() =>
  createStyles({
    profile: {
      width: "300px",
      height: "300px",
      objectFit: "cover",
      border: "solid 2px black",
      boxShadow: "5px 10px #718a7e",
      borderRadius: "10px",
    },
  })
);
