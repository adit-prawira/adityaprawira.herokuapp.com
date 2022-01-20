import { createTheme } from "@material-ui/core";
// import palette from "./palette";
import typography from "./typography";
import overrides from "./overrides";

const baseTheme = {
    palette: {
        type: "dark",
        primary: {
            light: "#8BCCB4",
            main: "#7db8a2",
            dark: "#639482",
            contrastText: "#fff",
        },
        secondary: {
            light: "#cfcccc",
            main: "#b3b1b1",
            dark: "#aba7a7",
        },
    },
    whiteGlassColor: { main: "rgba(224, 224, 224, 0.3)" },
    greyGlassColor: { main: "rgba(200, 200, 200, 0.3)" },
    toscaGlassColor: {
        main: "radial-gradient(circle, rgba(2,215,126,0.1) 0%, rgba(67,198,159,0.1) 100%)",
    },
    typography,
    overrides,
};

export const darkTheme = createTheme(baseTheme);
export const themeWithRtl = createTheme({ ...baseTheme, direction: "rtl" });
