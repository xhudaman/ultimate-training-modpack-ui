import { createRoot } from "react-dom/client";
import App from "./components/app";
import "./styles/index.css";
import "./styles/app.css";
import { initializeNx } from "./initializers/nx";
import { loadMenu } from "./initializers/menu";

// initializeNx();

const menu = loadMenu();

const root = createRoot(document.getElementById("root"));

root.render(<App _menu={menu} />);
