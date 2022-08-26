import React, { useState, useEffect, useContext } from "react";

const LegacyContext = React.createContext();

export const LegacyContextProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    // Create menu from URL search params
  }, []);

  const updateMenuAndExit = (settings) => {
    setMenu({...menu, settings});
    window.location.href = 'http://localhost';
  };

  return (
    <LegacyContext.Provider value={menu}>
        {children}
    </LegacyContext.Provider>
  );
};

export const useLegacyMenuContext = () => {
  const menu = useContext(LegacyContextProvider);

  return [menu];
};