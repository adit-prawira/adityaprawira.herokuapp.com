import { Toolbar } from "@mui/material";

import {
  StyledAppBar,
  StyledButton,
  StyledClock,
  StyledFlexGrow,
} from "./styles";
import { useNavigate } from "react-router";

export function Navbar(): JSX.Element {
  const navigate = useNavigate();

  return (
    <StyledAppBar position="static" elevation={0}>
      <Toolbar>
        <StyledButton onClick={() => navigate("/")}>Home</StyledButton>
        <StyledFlexGrow />
        <StyledButton onClick={() => navigate("/artworks")}>
          Artworks/Albums
        </StyledButton>
        <StyledFlexGrow />
        <StyledClock type="digital" />
      </Toolbar>
    </StyledAppBar>
  );
}
