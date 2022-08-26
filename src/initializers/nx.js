const { nx } = window;

const isNxAvailale = typeof nx !== "undefined";

const goBack = () => {
  alert("going back!");
};

const resetCurrentMenu = () => {
  alert("resetting current menu");
};

const resetAllSubmenus = () => {
  alert("reseting all submenus");
};

const saveDefaults = () => {
  alert("saving defaults");
};

const cycleTab = (direction) => {
  alert(`cycling tab in the ${direction} direction`);
};

export const initializeNx = () => {
  if (isNxAvailale) {
    nx.footer.setAssign("B", "", closeOrExit, { se: "" });
    nx.footer.setAssign("X", "", resetCurrentMenu, { se: "" });
    nx.footer.setAssign("L", "", resetAllMenus, { se: "" });
    nx.footer.setAssign("R", "", saveDefaults, { se: "" });
    nx.footer.setAssign("ZR", "", cycleNextTab, { se: "" });
    nx.footer.setAssign("ZL", "", cyclePrevTab, { se: "" });
  }

  // Set desktop defaults
  document.addEventListener("keypress", (event) => {
    switch (event.key) {
      case "b":
        console.log("b");
        goBack();
        break;
      case "x":
        console.log("x");
        resetCurrentMenu();
        break;
      case "l":
        console.log("l");
        resetAllSubmenus();
        break;
      case "r":
        console.log("r");
        saveDefaults();
        break;
      case "p":
        console.log("p");
        cycleTab(1);
        break;
      case "o":
        console.log("o");
        cycleTab(-1);
        break;
    }
  });
};
