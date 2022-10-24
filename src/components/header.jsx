import React from "react";

const goBackHook = () => alert("Go Back!");
const Header = () => {
  return (
    <div className="header bg-gray-900">
      <div className="h-full">
        <button
          className="flex justify-center align-center w-[100px] h-5/6 bg-red-700 rounded-br-lg"
          onClick={goBackHook}
        >
          <img
            className="h-[44.16px] w-[44.16px]"
            src="assets/images/m_retnormal.svg"
          />
        </button>
      </div>
      <p className="mx-auto text-2xl font-bold text-red-400 -translate-x-[50px]">
        Ultimate Training Modpack
      </p>
    </div>
  );
};

export default Header;
