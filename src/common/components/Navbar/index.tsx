import { Toolbar } from "@mui/material";
import { useHistory } from "react-router-dom";
import {
  StyledAppBar,
  StyledButton,
  StyledClock,
  StyledFlexGrow,
} from "./styles";

export function Navbar(): JSX.Element {
  const history = useHistory();

  return (
    <StyledAppBar position="static" elevation={0}>
      <Toolbar>
        <StyledButton onClick={() => history.push("/")}>Home</StyledButton>
        <StyledFlexGrow />
        <StyledButton onClick={() => history.push("/artworks")}>
          Artworks/Albums
        </StyledButton>
        <StyledFlexGrow />
        <StyledClock type="digital" />
      </Toolbar>
    </StyledAppBar>
  );
}
