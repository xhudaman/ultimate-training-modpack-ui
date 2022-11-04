import React from "react";
import { twClassNames } from "../../lib/tailwindClassNames";

const MenuButton = (
  { handleClick, handleFocus, handleMouseEnter, classNames, children },
  ref
) => {
  const classes = twClassNames(
    [
      "border border-black border-x-[1rem] border-y-[0.25rem] bg-gray-200 rounded-lg mx-2 text-lg",
      "focus:outline-none hocus:scale-105 hocus:border-orange-400 hocus:drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]",
    ],
    classNames
  );

  return (
    <button
      className={classes}
      onClick={handleClick}
      onFocus={handleFocus}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </button>
  );
};
export default MenuButton;
