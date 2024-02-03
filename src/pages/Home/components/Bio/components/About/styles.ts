import { Button, Grid } from "@mui/material";
import { styled } from "@mui/system";

export const StyledHeaderContainer = styled(Grid)({ marginBottom: 10 });
export const StyledButton = styled(Button)({ borderRadius: 50 });

export const StyledLoadingContainer = styled("div")({
  width: "100%",
  height: 500,
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
});
