import React, { createContext } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme } from "./theme";

export interface ThemeContextState {
  setTheme: (type: "light" | "dark") => void;
}
export const INITIAL_THEME_STATE: ThemeContextState = {
  setTheme: () => {},
};

export const ThemeContext =
  createContext<ThemeContextState>(INITIAL_THEME_STATE);

export interface ThemeProviderProps {
  readonly children?: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}
