import { useState, useMemo, useEffect, Fragment } from "react";
import Footer from "./footer";
import Header from "./header";
import MenuButton from "./inputs/menuButton";
import { twClassNames } from "../lib/tailwindClassNames";
import { useMenuContext, useNxContext } from "../contexts";
import { getConfigFromMenu } from "../initializers/menu";
import deepCopy from "../utils/deepCopy";

const App = () => {
  const { menus, isMenuLoading } = useMenuContext();
  const {
    main: menu,
    setMainMenu: setMenu,
    defaults: defaultsMenu,
    setDefaultsMenu,
  } = menus;
  const [currentTab, setCurrentTab] = useState("mash");
  const [activeMenu, setActiveMenu] = useState(false);
  const [helpText, setHelpText] = useState();

  const tabs = useMemo(() => menu && Object.keys(menu), [menu]);
  const { nx, isNxAvailable } = useNxContext();

  const handleOpenTab = (tabName) => {
    setActiveMenu();
    setCurrentTab(tabName);
  };

  const cycleTab = (currentTab, direction) => {
    const index = tabs.indexOf(currentTab);
    console.log(`cycling tab in the ${direction} direction`, index);
    if (index === -1) return console.log("tab not found");
    if (index === 0 && direction === -1) {
      return handleOpenTab(tabs[tabs.length - 1]);
    }

    if (index === tabs.length - 1 && direction === 1) {
      return handleOpenTab(tabs[0]);
    }

    handleOpenTab(tabs[index + direction]);
  };

  const goBack = () => {
    if (activeMenu) {
      return handleOpenTab(currentTab);
    }

    const backButton = document.querySelector("button");
    //exit page
    backButton.focus();
    const config = getConfigFromMenu(menu);
    const defaultConfig = getConfigFromMenu(defaultsMenu);
    const serializedConfig = JSON.stringify({
      menu: config,
      defaults_menu: defaultConfig,
    });
    console.log("exiting", { config, defaultConfig, serializedConfig });
    if (isNxAvailable) {
      alert(
        `exiting: ${JSON.stringify(
          { config, defaultConfig, serializedConfig },
          2
        )}`
      );
      nx.sendMessage(serializedConfig);
    }
  };

  // True if value is in mask or
  // Both the mask and current value are 0 (single option is off)
  const isInMask = (value) =>
    (activeMenu.mask & value) !== 0 || (activeMenu.mask === 0 && value === 0);

  const handleClickOption = (value) => {
    const updatedMenu = { ...menu };
    const menuItemIndex = updatedMenu[currentTab].findIndex(
      (item) => item.name === activeMenu.name
    );
    const menuItem = updatedMenu[currentTab][menuItemIndex];
    const currentMask = menuItem.mask;

    menuItem.mask = isInMask(value) ? currentMask - value : currentMask + value;

    if (menuItem.isSingleOption) {
      menuItem.options.forEach((option) => {
        // Don't run on the toggled option
        if (option.value === value) return;

        // Remove from mask if it includes the unselected option
        if (isInMask(option.value)) {
          menuItem.mask -= option.value;
        }
      });
    }

    updatedMenu[currentTab][menuItemIndex] = menuItem;

    setMenu(updatedMenu);
  };

  const cycleNextTab = () => cycleTab(currentTab, 1);
  const cyclePrevTab = () => cycleTab(currentTab, -1);

  const resetCurrentMenu = () => {
    if (activeMenu) {
      const updatedMenu = { ...menu };
      const newActive = deepCopy(
        defaultsMenu[currentTab].find((item) => item.name === activeMenu.name)
      );
      const newActiveIndex = updatedMenu[currentTab].findIndex(
        (item) => item.name === newActive.name
      );

      updatedMenu[currentTab][newActiveIndex] = newActive;

      setActiveMenu(newActive);
      setMenu(updatedMenu);
    }
  };
  const resetAllMenus = () => setMenu(deepCopy(defaultsMenu));
  const saveDefaults = () => setDefaultsMenu(deepCopy(menu));

  useEffect(() => {
    if (isNxAvailable) {
      nx.footer.setAssign("B", "", goBack, { se: "" });
      nx.footer.setAssign("X", "", resetCurrentMenu, { se: "" });
      nx.footer.setAssign("L", "", resetAllMenus, { se: "" });
      nx.footer.setAssign("R", "", saveDefaults, { se: "" });
      nx.footer.setAssign("ZR", "", cycleNextTab, { se: "" });
      nx.footer.setAssign("ZL", "", cyclePrevTab, { se: "" });
    } else {
      const keyPressEventHandler = (event) => {
        switch (event.key) {
          case "b":
            console.log("b");
            goBack();
            break;
          case "p":
            console.log("p");
            cycleNextTab();
            break;
          case "o":
            console.log("o");
            cyclePrevTab();
            break;
          case "x":
            resetCurrentMenu();
            break;
          case "l":
            console.log("l: Resetting all menus...");
            resetAllMenus();
            break;
          case "r":
            console.log("r: Saving defaults...");
            saveDefaults();
            break;
          default:
            break;
        }
      };

      document.addEventListener("keypress", keyPressEventHandler);

      return () =>
        document.removeEventListener("keypress", keyPressEventHandler);
    }
  }, [
    currentTab,
    activeMenu,
    goBack,
    resetCurrentMenu,
    resetAllMenus,
    saveDefaults,
    cycleNextTab,
    cyclePrevTab,
    isNxAvailable,
    nx,
  ]);

  return (
    <div className="app bg-gray-200">
      <Header />
      {isMenuLoading ? (
        <div>Test</div>
      ) : (
        <Fragment>
          {!activeMenu && (
            <div className="flex justify-start items-center h-[40px] bg-gray-600">
              {tabs &&
                tabs.map((tabName) => (
                  <button
                    key={tabName}
                    className={twClassNames([
                      "mx-1 px-4 py-2 rounded-t-lg bg-gray-600 hover:bg-gray-200 text-gray-200 hover:text-gray-600",
                      tabName === currentTab && "bg-gray-200 text-gray-600",
                    ])}
                    onClick={() => handleOpenTab(tabName)}
                    tabIndex={-1}
                  >
                    <span className="capitalize">{tabName}</span>
                  </button>
                ))}
            </div>
          )}
          {menu && (
            <div
              className={twClassNames(
                "h-[554px] flex flex-wrap justify-center items-center",
                activeMenu && "hidden"
              )}
            >
              {menu[currentTab].map(({ name, label, helpText }) => (
                <MenuButton
                  key={name}
                  classNames="basis-[23%] mx-2 p-1"
                  handleClick={() => {
                    setActiveMenu(
                      menu[currentTab].find((item) => item.name === name)
                    );
                  }}
                  handleFocus={() => setHelpText(helpText)}
                >
                  <div className="flex justify-start items-center w-full h-full">
                    <img
                      className="w-1/4 h-full"
                      src={`assets/images/${name}.svg`}
                      alt="placeholder"
                    />
                    <span className="mx-auto">{label}</span>
                  </div>
                </MenuButton>
              ))}
            </div>
          )}
          {activeMenu && (
            <div className="h-[594px] bg-black/60 flex flex-wrap justify-center items-center">
              {activeMenu.options.map(({ label, value }) => (
                <MenuButton
                  key={label}
                  classNames="basis-[20%] h-[50px] mx-[1%] py-0 px-2 border-x-[0.75rem] border-y-[0.25rem] bg-gray-200"
                  handleClick={() => handleClickOption(value)}
                >
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      className={twClassNames(
                        "w-1/4 h-full",
                        !isInMask(value) && "invisible"
                      )}
                      src="assets/images/check.svg"
                      alt="checked"
                    />
                    <span className="mx-auto">{label}</span>
                  </div>
                </MenuButton>
              ))}
            </div>
          )}
        </Fragment>
      )}

      <Footer helpText={helpText} />
    </div>
  );
};

export default App;
