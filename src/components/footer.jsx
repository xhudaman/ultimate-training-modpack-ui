import React from "react";

const Footer = ({ helpText }) => {
  return (
    <div className="fixed bottom-0 bg-gray-900 text-white w-full h-[73px] flex justify-center items-center">
      <p className="text-gray-200">{helpText}</p>
    </div>
  );
};

export default Footer;
