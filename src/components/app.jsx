import { useState, useMemo, useEffect, useCallback, Fragment } from "react";
import Footer from "./footer";
import Header from "./header";
import MenuButton from "./inputs/menuButton";
import { twClassNames } from "../lib";
import { useMenuContext, useNxContext } from "../contexts";
import { getConfigFromMenu } from "../initializers/menu";
import deepCopy from "../utils/deepCopy";
import { Dialog, Transition } from "@headlessui/react";

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
  const [showHelpMenu, setShowHelpMenu] = useState(false);

  const tabs = useMemo(() => menu && Object.keys(menu), [menu]);
  const { nx, isNxAvailable } = useNxContext();

  const handleOpenTab = useCallback(
    (tabName) => {
      setActiveMenu();
      setCurrentTab(tabName);
    },
    [setActiveMenu, setCurrentTab]
  );

  const cycleTab = useCallback(
    (currentTab, direction) => {
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
    },
    [handleOpenTab, tabs]
  );

  const goBack = useCallback(() => {
    if (isMenuLoading) return;

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
      nx.sendMessage(serializedConfig);
    }
  }, [
    isMenuLoading,
    activeMenu,
    menu,
    defaultsMenu,
    isNxAvailable,
    nx,
    handleOpenTab,
    currentTab,
  ]);

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

  const cycleNextTab = useCallback(
    () => cycleTab(currentTab, 1),
    [currentTab, cycleTab]
  );
  const cyclePrevTab = useCallback(
    () => cycleTab(currentTab, -1),
    [currentTab, cycleTab]
  );

  const resetCurrentMenu = useCallback(() => {
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
  }, [activeMenu, menu, currentTab, defaultsMenu, setMenu]);
  const resetAllMenus = useCallback(() => {
    const updatedMenu = deepCopy(defaultsMenu);

    setMenu(updatedMenu);
    if (activeMenu) {
      setActiveMenu(
        updatedMenu[currentTab].find((menu) => menu.name === activeMenu.name)
      );
    }
  }, [defaultsMenu, setMenu, currentTab, activeMenu, setActiveMenu]);
  const saveDefaults = useCallback(
    () => setDefaultsMenu(deepCopy(menu)),
    [menu, setDefaultsMenu]
  );

  const toggleHelpMenu = useCallback(
    () => setShowHelpMenu(!showHelpMenu),
    [showHelpMenu, setShowHelpMenu]
  );

  useEffect(() => {
    if (isNxAvailable) {
      nx.footer.setAssign("B", "", goBack, { se: "" });
      nx.footer.setAssign("X", "", resetCurrentMenu, { se: "" });
      nx.footer.setAssign("Y", "", toggleHelpMenu, { se: "" });
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
          case "y":
            toggleHelpMenu();
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
    toggleHelpMenu,
    cycleNextTab,
    cyclePrevTab,
    goBack,
    resetAllMenus,
    resetCurrentMenu,
    saveDefaults,
    isNxAvailable,
    nx,
  ]);

  const closeModal = () => toggleHelpMenu();

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
            <Fragment>
              {tabs.map((tabName) => (
                <div
                  key={tabName}
                  className={twClassNames(
                    "h-[554px] flex flex-wrap justify-center items-center",
                    (currentTab !== tabName || activeMenu) && "hidden"
                  )}
                >
                  {menu[tabName].map(({ name, label, helpText }) => (
                    <MenuButton
                      key={name}
                      classNames="basis-[23%] mx-2 p-1"
                      handleClick={() => {
                        setActiveMenu(
                          menu[tabName].find((item) => item.name === name)
                        );
                      }}
                      handleFocus={() => setHelpText(helpText)}
                      handleMouseEnter={() => setHelpText(helpText)}
                      autofocus
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
              ))}
            </Fragment>
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

          <Transition show={showHelpMenu} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              open={showHelpMenu}
              onClose={closeModal}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-80"
                leave="ease-in duration-200"
                leaveFrom="opacity-80"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-lg bg-gray-200 p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="flex text-2xl font-medium leading-6 text-gray-900"
                      >
                        <span>Training Modpack Help</span>
                        <span className="text-base ml-auto">
                          &#xE0E3; Close Help Menu
                        </span>
                      </Dialog.Title>
                      <div className="flex flex-col h-full mt-4 text-gray-800">
                        <span className="inline-flex text-lg items-center">
                          <span className="text-xl">&#xE0E6;</span>
                          <span className="ml-2">Previous tab</span>
                        </span>
                        <span className="inline-flex text-lg items-center">
                          <span className="text-xl">&#xE0E7;</span>
                          <span className="ml-2">Next tab</span>
                        </span>
                        <span className="inline-flex text-lg items-center">
                          <span className="text-xl">&#xE0E2;</span>
                          <span className="ml-2">
                            Reset current menu (when a menu is open)
                          </span>
                        </span>
                        <span className="inline-flex text-lg items-center">
                          <span className="text-xl">&#xE0E4;</span>
                          <span className="ml-2">Reset all menus</span>
                        </span>
                        <span className="inline-flex text-lg items-center">
                          <span className="text-xl">&#xE0E5;</span>
                          <span className="ml-2">
                            Save current options as defaults
                          </span>
                        </span>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </Fragment>
      )}

      <Footer helpText={helpText} />
    </div>
  );
};

export default App;
