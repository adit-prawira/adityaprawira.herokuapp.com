import { Grid } from "@mui/material";

import { StyledImage } from "./styles";

export function ContactDetails(): JSX.Element {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid container item xs={12} justifyContent="center">
        <StyledImage src="Images/myphoto.jpg" alt="myphoto" />
      </Grid>
    </Grid>
  );
}
