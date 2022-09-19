import { createRoot } from "react-dom/client";
import App from "./components/app";
import "./styles/index.css";
import "./styles/app.css";
import { initializeNx } from "./initializers/nx";
import { MenuContextProvider } from "./contexts/menu.context";

// initializeNx();

const root = createRoot(document.getElementById("root"));

root.render(
  <MenuContextProvider>
    <App />
  </MenuContextProvider>
);
