import { Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { styled as muiSystemStyled } from "@mui/system";

export const StyledAvatar = styled(Avatar)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(["background-color", "transform"], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.3);
  }
  `}
`;

export const StyledImage = muiSystemStyled("img")({
  width: "100%",
  borderRadius: "10px",
  boxShadow: "10px 10px white",
});
