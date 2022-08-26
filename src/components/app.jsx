import { useState, useMemo, useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import MenuButton from "./inputs/menuButton";
import { twClassNames } from "../lib/tailwindClassNames";

const defaultHelpText = "Default help text.";

const App = ({ _menu }) => {
  const [menu, setMenu] = useState(_menu);
  const [currentTab, setCurrentTab] = useState("mash");
  const [focusedMenu, setFocusedMenu] = useState(false);
  const [helpText, setHelpText] = useState(defaultHelpText);

  const tabs = useMemo(() => Object.keys(menu));

  const resetHelpText = () => setHelpText(defaultHelpText);

  useEffect(() => {
    console.log({ menu });
  }, [menu]);

  const handleOpenTab = (tabName) => {
    setFocusedMenu();
    setCurrentTab(tabName);
    resetHelpText();
  };

  const cycleTab = (currentTab, direction) => {
    console.log(`cycling tab in the ${direction} direction`, index);
    const index = tabs.indexOf(currentTab);
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
    if (focusedMenu) {
      return handleOpenTab(currentTab);
    }

    const backButton = document.querySelector("button");
    //exit page
    backButton.focus();
    console.log("exiting");
  };

  const isInMask = (value) => (focusedMenu.mask & value) != 0;

  const handleClickOption = (value) => {
    const updatedMenu = { ...menu };
    const menuItemIndex = updatedMenu[currentTab].findIndex(
      (item) => item.name === focusedMenu.name
    );
    const currentMask = updatedMenu[currentTab][menuItemIndex].mask;
    updatedMenu[currentTab][menuItemIndex].mask = isInMask(value)
      ? currentMask - value
      : currentMask + value;

    setMenu(updatedMenu);
  };

  useEffect(() => {
    const eventHandler = (event) => {
      switch (event.key) {
        case "b":
          console.log("b");
          goBack();
          break;
        case "p":
          console.log("p");
          cycleTab(currentTab, 1);
          break;
        case "o":
          console.log("o");
          cycleTab(currentTab, -1);
          break;
      }
    };

    document.addEventListener("keypress", eventHandler);

    return () => document.removeEventListener("keypress", eventHandler);
  }, [currentTab, focusedMenu]);

  return (
    <div className="app bg-gray-200">
      <Header />
      <div className="flex justify-start items-center h-[40px] bg-gray-600">
        {tabs.map((tabName) => (
          <button
            key={tabName}
            className={twClassNames([
              "mx-1 px-4 py-2 rounded-t-lg bg-gray-600 hover:bg-gray-200 text-gray-200 hover:text-gray-600",
              tabName === currentTab && "bg-gray-200 text-gray-600",
            ])}
            onClick={() => handleOpenTab(tabName)}
          >
            <span className="capitalize">{tabName}</span>
          </button>
        ))}
      </div>
      {menu && (
        <div
          className={twClassNames(
            "h-[513px] flex flex-wrap justify-center items-center",
            focusedMenu && "hidden"
          )}
        >
          {menu[currentTab].map(({ name, label }) => (
            <MenuButton
              key={name}
              classNames="basis-[23%] mx-2 p-[0.25rem]"
              handleClick={() => {
                setFocusedMenu(
                  menu[currentTab].find((item) => item.name === name)
                );
              }}
              handleFocus={() => setHelpText(label)}
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
          <Footer helpText={helpText} />
        </div>
      )}
      {focusedMenu && (
        <div className="h-[627px] bg-black/60 flex flex-wrap justify-center items-center">
          {focusedMenu.options.map(({ label, value }) => (
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
    </div>
  );
};

export default App;