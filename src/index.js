import "react-app-polyfill/stable";
import "intersection-observer";
import { createRoot } from "react-dom/client";
import App from "./components/app";
import "./styles/index.css";
import "./styles/app.css";
import { MenuContextProvider } from "./contexts/menu.context";
import { NxContextProvider } from "./contexts/nx.context";
import ErrorBoundary from "./components/errorBoundary";
import DevTools from "./lib/devTools";

const root = createRoot(document.getElementById("root"));

DevTools({ enableConsoleOverrides: true, enableInProduction: true });

root.render(
  <ErrorBoundary>
    <NxContextProvider>
      <MenuContextProvider>
        <App />
      </MenuContextProvider>
    </NxContextProvider>
  </ErrorBoundary>
);
