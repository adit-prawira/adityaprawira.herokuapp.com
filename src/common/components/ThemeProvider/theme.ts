import { createTheme, ThemeOptions } from "@mui/material/styles";
import { APP_BAR_HEIGHT } from "./dimensions";
import { Color } from "./color";
const theme = createTheme();
const darkMode: ThemeOptions = {
  palette: {
    mode: "dark",
    background: { default: "#272b31", paper: "#1e2125" },
    ...Color,
    text: {
      primary: "#e6e9f0",
      secondary: "#a1a9b3",
    },
    action: {
      ...theme.palette.action,
      active: theme.palette.common.white,
      disabled: theme.palette.grey[600],
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 5,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: 2,
          paddingLeft: 10,
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 1,
      },
      styleOverrides: {
        root: { padding: 0, height: APP_BAR_HEIGHT },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          backgroundColor: "#1f2125",
          padding: "2%",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: { root: { width: 300 } },
    },
    MuiDialogContent: {
      styleOverrides: { root: { backgroundColor: "#2a2c30" } },
    },

    MuiCard: { styleOverrides: { root: { minHeight: "10vh" } } },
    MuiLink: {
      styleOverrides: { root: { textDecoration: "none" } },
    },
  },
};

export const darkTheme = createTheme(darkMode);
