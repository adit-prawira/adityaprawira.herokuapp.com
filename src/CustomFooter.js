import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Footer } from "grommet";

function CustomFooter() {
  return (
    <Footer
      pad="small"
      style={{
        width: "100%",
        backgroundColor: "rgb(43, 48, 62)",
        position: "fixed",
        bottom: 0,
      }}
    >
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
    </Footer>
  );
}
export default CustomFooter;
