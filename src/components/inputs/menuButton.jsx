import React from "react";
import { twClassNames } from "../../lib/tailwindClassNames";

const MenuButton = ({
  handleClick,
  handleFocus,
  handleMouseEnter,
  classNames,
  children,
}) => {
  const classes = twClassNames(
    [
      "border border-black	border-x-[1rem] border-y-[0.25rem] rounded-lg mx-2 text-lg",
      "hocus:scale-105 hocus:outline-none hocus:ring hocus:ring-orange-400",
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
