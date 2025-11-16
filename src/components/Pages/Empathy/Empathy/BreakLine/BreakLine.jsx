const BreakLine = ({ text }) => {
  return (
    <div className="w-full  py-[35px] flex items-center justify-center gap-4 px-[20px]  lg:px-[45px] ">
      <div className=" flex-grow h-px bg-Stroke-Greyscale-Greyscale-300  "></div>

      <h1 className=" whitespace-nowrap h-[26px] font-Abar_Low_FaNum font-bold text-[16px] leading-[1.6] text-Primary-500 mx-  flex-nowrap ">{text}</h1>

      <div className="flex-grow h-px bg-Stroke-Greyscale-Greyscale-300 "></div>
    </div>
  );
};

export default BreakLine;
