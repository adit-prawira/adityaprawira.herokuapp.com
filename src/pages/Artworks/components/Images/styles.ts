import { Grid } from "@mui/material";
import { styled } from "@mui/system";

export const Image = styled("img")({
  width: "80%",
  "&:hover": {
    boxShadow: "0 0.5em 0.5em -0.4em black",
    transform: "translateY(-0.25em)",
    cursor: "pointer",
  },
});

export const ImageContainer = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
