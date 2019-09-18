import { ThemeProvider } from "emotion-theming";
import React from "react";
import theme from "./theme";

const Themer = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Themer;
