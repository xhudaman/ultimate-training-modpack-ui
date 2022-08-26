import React from "react";
import { twClassNames } from "../../lib/tailwindClassNames";

const MenuButton = ({ handleClick, handleFocus, classNames, children }) => {
  const classes = twClassNames(
    [
      "border border-black	border-x-[1rem] border-y-[0.25rem] rounded-lg mx-2 text-lg",
    ],
    classNames
  );

  return (
    <button className={classes} onClick={handleClick} onFocus={handleFocus}>
      {children}
    </button>
  );
};

export default MenuButton;
