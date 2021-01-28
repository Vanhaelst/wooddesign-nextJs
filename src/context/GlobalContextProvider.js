import React, { useState, useCallback } from 'react';

const GlobalContext = React.createContext();

const GlobalContextProvider = ({ children }) => {
  const [globalState, setState] = useState({
    bannerData: { type: 'info', message: '', mayShow: false },
    isMobile: undefined,
  });

  const setGlobalState = useCallback(
    data => setState(state => ({ ...state, ...data })),
    [setState],
  );

  return (
    <GlobalContext.Provider value={{ ...globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
