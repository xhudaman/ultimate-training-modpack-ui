import { useState, createContext, useContext } from "react";

const NxContext = createContext();

const useNxContext = () => {
  const { nx, isNxAvailable } = useContext(NxContext);

  if (!nx) {
    console.log("Running in browser mocking nx...", null, { nativeOnly: true });
  }

  return { nx, isNxAvailable };
};

const NxContextProvider = ({ children }) => {
  const [nx] = useState(window.nx);

  return (
    <NxContext.Provider
      value={{ nx, isNxAvailable: typeof nx !== "undefined" }}
    >
      {children}
    </NxContext.Provider>
  );
};

export { useNxContext, NxContextProvider };
