import React, { useState, useCallback, useEffect } from "react";

// Widths (px) that split mobile / tablet / desktop.
const BREAKPOINT_SMALL = 480;
const BREAKPOINT_LARGE = 1010;

const GlobalContext = React.createContext({});

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
      const mobileScreen = screenWidth <= BREAKPOINT_SMALL
      const tabletScreen = screenWidth > BREAKPOINT_SMALL && screenWidth <= BREAKPOINT_LARGE

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
