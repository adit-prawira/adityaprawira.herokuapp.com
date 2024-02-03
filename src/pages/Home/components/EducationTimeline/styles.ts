import { Paper } from "@mui/material";
import { styled } from "@mui/system";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "1%",
  margin: theme.spacing(1),
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.1)",
    cursor: "pointer",
    color: "azure",
  },
}));
