import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

const DefaultPage = ({ children, isMobile = false }) => {
  return (
    <>
      <ThemeProvider theme={theme} isMobile={isMobile}>
        {children}
      </ThemeProvider>
    </>
  );
};

export default DefaultPage;
