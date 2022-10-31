import { useState, useEffect, createContext, useContext } from "react";
import { loadMenu } from "../initializers/menu";
import { useNxContext } from "./";

const WEB_DEFAULT_MENUS = {
  menu: {
    aerial_delay: 0,
    air_dodge_dir: 0,
    attack_angle: 0,
    buff_state: 0,
    character_item: 0,
    clatter_strength: 0,
    crouch: 0,
    di_state: 0,
    falling_aerials: 0,
    fast_fall_delay: 0,
    fast_fall: 0,
    follow_up: 0,
    frame_advantage: 0,
    full_hop: 0,
    hitbox_vis: 1,
    input_delay: 0,
    ledge_delay: 0,
    ledge_state: 0,
    mash_state: 4194304,
    mash_triggers: 65536,
    miss_tech_state: 0,
    oos_offset: 0,
    pummel_delay: 0,
    quick_menu: 0,
    reaction_time: 0,
    save_damage: 0,
    save_state_autoload: 0,
    save_state_enable: 0,
    save_state_mirroring: 0,
    sdi_state: 0,
    sdi_strength: 0,
    shield_state: 0,
    shield_tilt: 0,
    stage_hazards: 0,
    tech_state: 0,
    throw_delay: 0,
    throw_state: 0,
  },
  defaults_menu: {
    aerial_delay: 0,
    air_dodge_dir: 0,
    attack_angle: 0,
    buff_state: 0,
    character_item: 0,
    clatter_strength: 0,
    crouch: 0,
    di_state: 0,
    falling_aerials: 0,
    fast_fall_delay: 0,
    fast_fall: 0,
    follow_up: 0,
    frame_advantage: 0,
    full_hop: 0,
    hitbox_vis: 1,
    input_delay: 0,
    ledge_delay: 0,
    ledge_state: 0,
    mash_state: 4194304,
    mash_triggers: 65536,
    miss_tech_state: 0,
    oos_offset: 0,
    pummel_delay: 0,
    quick_menu: 0,
    reaction_time: 0,
    save_damage: 0,
    save_state_autoload: 0,
    save_state_enable: 0,
    save_state_mirroring: 0,
    sdi_state: 0,
    sdi_strength: 0,
    shield_state: 0,
    shield_tilt: 0,
    stage_hazards: 0,
    tech_state: 0,
    throw_delay: 0,
    throw_state: 0,
  },
};

const MenuContext = createContext();

const useMenuContext = () => {
  const menu = useContext(MenuContext);

  if (!menu) {
    throw new Error("Cannot use a Context outside a provider");
  }

  return menu;
};

const MenuContextProvider = ({ children }) => {
  const [mainMenu, setMainMenu] = useState();
  const [defaultsMenu, setDefaultsMenu] = useState();
  const { nx, isNxAvailable } = useNxContext();

  useEffect(() => {
    const handleMessage = (message) => {
      try {
        const { menu: config, defaults_menu: defaultConfig } = JSON.parse(
          message.data
        );

        const updatedMenu = loadMenu(config);
        const updatedDefaultMenu = loadMenu(defaultConfig);

        setMainMenu(updatedMenu);
        setDefaultsMenu(updatedDefaultMenu);
      } catch (error) {
        console.error(error);
      }
    };

    if (isNxAvailable) {
      nx.addEventListener("message", handleMessage);
      nx.sendMessage("loaded");

      return () => nx.removeEventListener("message", handleMessage);
    }

    setTimeout(() => {
      setMainMenu(loadMenu(WEB_DEFAULT_MENUS.menu));
      setDefaultsMenu(loadMenu(WEB_DEFAULT_MENUS.defaults_menu));
    }, 1750);
  }, [nx, isNxAvailable]);

  const value = {
    menus: {
      main: mainMenu,
      setMainMenu,
      defaults: defaultsMenu,
      setDefaultsMenu,
    },

    isMenuLoading: !mainMenu,
  }; // [menu, setMenu, defaultsMenu, setDefaultsMenu];

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export { useMenuContext, MenuContextProvider };
