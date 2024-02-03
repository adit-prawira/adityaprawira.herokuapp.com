import { AppBar, Button } from "@mui/material";
import { styled } from "@mui/system";
import { Clock } from "grommet";

export const StyledAppBar = styled(AppBar)({
  backgroundColor: "rgb(43, 48, 62)",
  width: "100%",
  height: "8vh",
});

export const StyledButton = styled(Button)({
  color: "white",
  backgroundColor: "rgba(255, 255, 255, 0)",
  marginLeft: "1%",
  paddingRight: "1%",
  paddingLeft: "1%",
  "&:hover": {
    backgroundColor: "rgb(53,53,61)",
    transition: "background-color 0.5s ease-in-out",
  },
});

export const StyledFlexGrow = styled("div")({
  flexGrow: 1,
});

export const StyledClock = styled(Clock)({
  marginLeft: "1%",
  color: "#e6e9f0",
});
