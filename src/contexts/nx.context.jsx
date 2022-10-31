import { useState, useEffect, useMemo, createContext, useContext } from "react";

const NxContext = createContext();

const useNxContext = () => {
  const { nx, isNxAvailable } = useContext(NxContext);

  return { nx, isNxAvailable };
};

const NxContextProvider = ({ children }) => {
  const [nx] = useState(window.nx);
  const isNxAvailable = useMemo(() => typeof nx !== "undefined", [nx]);

  useEffect(() => {
    if (!isNxAvailable) {
      console.log("Running in browser, nx is not available!");
    }
  }, [isNxAvailable]);

  return (
    <NxContext.Provider value={{ nx, isNxAvailable }}>
      {children}
    </NxContext.Provider>
  );
};

export { useNxContext, NxContextProvider };
