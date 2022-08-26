import React from "react";

const goBackHook = () => alert("Go Back!");
const Header = () => {
  return (
    <div className="header bg-gray-900">
      <div className="h-full">
        <button
          className="flex justify-center align-center w-[101px] h-5/6 bg-red-700 rounded-br-lg"
          onClick={goBackHook}
        >
          <img className="h-full" src="assets/images/m_retnormal.svg" />
        </button>
      </div>
      <p className="mx-auto text-2xl text-red-400">Ultimate Training Modpack</p>
      {/*
        <div className="header-label">
          <p className="header-desc">Reset Current Menu: &#xE0A2;</p>
          <p className="header-desc">Reset All Menus: &#xE0A4;</p>
          <p className="header-desc">Save Defaults: &#xE0A5;</p>
        </div> 
      */}
    </div>
  );
};

export default Header;
