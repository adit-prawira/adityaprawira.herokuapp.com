import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { StyledFooter } from "./styles";

export function PortfolioFooter(): JSX.Element {
  return (
    <StyledFooter pad="small">
      <a href="https://www.instagram.com/azuregazemusic/">
        <InstagramIcon color="action" fontSize="large" />
      </a>
      <a href="https://www.facebook.com/azuregazemusic/">
        <FacebookIcon color="action" fontSize="large" />
      </a>
      <a href="https://www.linkedin.com/in/aditya-prawira/">
        <LinkedInIcon color="action" fontSize="large" />
      </a>
      <a href="https://github.com/adit-prawira">
        <GitHubIcon color="action" fontSize="large" />
      </a>
    </StyledFooter>
  );
}
