import { Grid } from "@mui/material";

import { useStyles } from "./styles";

export function ContactDetails(): JSX.Element {
  const classes = useStyles();
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid container item xs={12} justifyContent="center">
        <img
          src="Images/myphoto.jpg"
          alt="myphoto"
          className={classes.profile}
        />
      </Grid>
    </Grid>
  );
}
