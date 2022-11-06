import { Fragment, useEffect } from "react";
import _DevTools from "../lib/devTools";

const DevTools = () => {
  useEffect(() => {
    const devTools = _DevTools({
      enableConsoleOverrides: true,
      enableInProduction: true,
    });

    return devTools.disconnect();
  }, []);

  return <Fragment></Fragment>;
};

export default DevTools;
