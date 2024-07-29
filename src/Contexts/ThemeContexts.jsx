import { createContext } from "react";

export const themes = {
  light: {
    background: "white",
    text: "black",
    
  },
  dark: {
    background: "black",
    text: "white",
  },
};

export const ThemeContext = createContext(themes.light);