import { Fragment, useEffect } from "react";
import WSConsole from "@xhudaman/ws-console";

const DevTools = () => {
  useEffect(() => {
    const devTools = WSConsole({
      enableConsoleOverrides: true,
      enableInProduction: true,
      debugServerUrl: process.env.REACT_APP_DEBUG_SERVER_URL,
    });

    return devTools.disconnect();
  }, []);

  return <Fragment></Fragment>;
};

export default DevTools;
