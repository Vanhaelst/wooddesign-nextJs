import React, { useState, useCallback, useEffect } from "react";
import theme from "../theme";

const GlobalContext = React.createContext();

const GlobalContextProvider = ({ children }) => {
  const [globalState, setState] = useState({
    screenSize: 0,
    isMobile: undefined,
    isTablet: undefined,
  });

  const setGlobalState = useCallback(
    (data) => setState((state) => ({ ...state, ...data })),
    [setState]
  );

  useEffect(() => {
      const screenWidth = typeof window !== "undefined" && window.innerWidth
      const mobileScreen = screenWidth <= theme.grid.breakpointSmall
      const tabletScreen = screenWidth > theme.grid.breakpointSmall && screenWidth <= theme.grid.breakpointLarge

      setGlobalState({
        screenSize: screenWidth,
        isMobile: mobileScreen,
        isTablet: tabletScreen
      });
  }, [])

  return (
    <GlobalContext.Provider value={{ ...globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
