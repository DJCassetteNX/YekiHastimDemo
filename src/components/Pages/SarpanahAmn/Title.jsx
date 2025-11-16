import React from "react";

const Title = ({ text }) => {
  return (
    <div className="w-[78%] mt-[55px] mx-auto flex flex-col mb-[55px]">
      <div className="divider px-5 text-base font-bold font-abar-low-fanum text-Primary-500 leading-relaxed whitespace-nowrap">{text}</div>
    </div>
  );
};

export default Title;
