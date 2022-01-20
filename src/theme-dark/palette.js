import { colors } from "@material-ui/core";

const white = "#FFFFFF";
export const darkMode = {
    primary: {
        contrastText: white,
        dark: colors.indigo[900],
        main: colors.indigo[500],
        light: colors.indigo[100],
    },
    secondary: {
        contrastText: white,
        dark: colors.blue[900],
        main: colors.blue.A700,
        light: colors.blue.A400,
    },
    error: {
        contrastText: white,
        dark: colors.red[900],
        main: colors.red[600],
        light: colors.red[400],
    },
    text: {
        primary: colors.blueGrey[100],
        secondary: colors.blueGrey[200],
        link: colors.green[300],
    },
    link: colors.blue[800],
    icon: colors.blueGrey[600],
    background: {
        default: colors.grey[700],
    },
    divider: colors.grey[200],
};

export default darkMode;
