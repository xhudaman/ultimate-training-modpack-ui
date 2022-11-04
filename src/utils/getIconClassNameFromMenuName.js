export const getIconClassNameFromMenuName = (menuName) =>
  `utm-${menuName.replace(/_/g, "-")}`;
