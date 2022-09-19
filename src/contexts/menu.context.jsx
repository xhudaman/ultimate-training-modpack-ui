import { useState, useEffect, createContext, useContext } from "react";
import { loadMenu } from "../initializers/menu";

const MenuContext = createContext();

const useMenuContext = () => {
  const menu = useContext(MenuContext);

  if (!menu) {
    throw new Error("Cannot use a Context outside a provider");
  }

  return menu;
};

const MenuContextProvider = ({ children }) => {
  const [menu, setMenu] = useState(loadMenu());
  let nx;
  useEffect(() => {
    // Create menu from URL search params
  }, []);

  const value = [menu, setMenu];

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export { useMenuContext, MenuContextProvider };
