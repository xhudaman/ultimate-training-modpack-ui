import "react-app-polyfill/stable";
import "intersection-observer";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app";
import "./styles/index.css";
import "./styles/utm-font.css";
import "./styles/app.css";
import { MenuContextProvider } from "./contexts/menu.context";
import { NxContextProvider } from "./contexts/nx.context";
import DevTools from "./components/devTools";
import ErrorBoundary from "./components/errorBoundary";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <DevTools />
      <NxContextProvider>
        <MenuContextProvider>
          <App />
        </MenuContextProvider>
      </NxContextProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
