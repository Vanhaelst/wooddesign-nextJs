import React from "react";
import {ThemeProvider} from "styled-components";
import theme from "../../theme";
import useGlobalContext from "src/context/hooks/useGlobalContext";

const DefaultPage = ({ children, isMobile = false }) => {

    return (
        <>
            <ThemeProvider theme={theme} isMobile={isMobile}>
                {children}
            </ThemeProvider>
        </>
    )
}

export default DefaultPage;
