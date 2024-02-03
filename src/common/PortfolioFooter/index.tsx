import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { StyledFooter } from "./styles";
import { Grid } from "@mui/material";

export function PortfolioFooter(): JSX.Element {
  return (
    <StyledFooter>
      <Grid container>
        <Grid container item xs={3} justifyContent="center">
          <a href="https://www.instagram.com/azuregazemusic/">
            <InstagramIcon color="action" fontSize="large" />
          </a>
        </Grid>
        <Grid container item xs={3} justifyContent="center">
          <a href="https://www.facebook.com/azuregazemusic/">
            <FacebookIcon color="action" fontSize="large" />
          </a>
        </Grid>
        <Grid container item xs={3} justifyContent="center">
          <a href="https://www.linkedin.com/in/aditya-prawira/">
            <LinkedInIcon color="action" fontSize="large" />
          </a>
        </Grid>
        <Grid container item xs={3} justifyContent="center">
          <a href="https://github.com/adit-prawira">
            <GitHubIcon color="action" fontSize="large" />
          </a>
        </Grid>
      </Grid>
    </StyledFooter>
  );
}
