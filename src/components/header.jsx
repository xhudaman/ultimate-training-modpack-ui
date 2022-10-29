import React, { useCallback } from "react";
import { useMenuContext, useNxContext } from "../contexts";
import { getConfigFromMenu } from "../initializers/menu";

const Header = () => {
  const { menus, isMenuLoading } = useMenuContext();
  const { nx, isNxAvailable } = useNxContext();

  const goBack = useCallback(() => {
    const config = getConfigFromMenu(menus.main);
    const defaultConfig = getConfigFromMenu(menus.defaults);
    const serializedConfig = JSON.stringify({
      menu: config,
      defaults_menu: defaultConfig,
    });

    console.log("exiting", { config, defaultConfig, serializedConfig });

    if (isNxAvailable) {
      nx.sendMessage(serializedConfig);
    }
  }, [menus, isNxAvailable, nx]);

  return (
    <div className="header bg-gray-900">
      <div className="h-full">
        <button
          className="w-[100px] h-5/6 bg-red-700 hover:bg-red-900 focus:bg-red-900 rounded-br-lg"
          onClick={goBack}
          disabled={isMenuLoading}
          tabIndex={-1}
        >
          <img
            className="h-[44.16px] w-[44.16px] mx-auto drop-shadow-[2px_3px_2px_rgba(0,0,0,0.4)]"
            src="assets/images/m_retnormal.svg"
            alt="Go back"
          />
        </button>
      </div>
      <p className="mx-auto text-2xl font-bold text-red-400 -translate-x-[50px]">
        Ultimate Training Modpack
      </p>
    </div>
  );
};

export default Header;
