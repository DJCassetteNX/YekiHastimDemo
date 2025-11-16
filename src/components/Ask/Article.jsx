const Article = () => {
  return (
    <div>
      <div className="flex items-center">
        <h1 className="h-[22px] font-Abar_Low_FaNum text-Text-General-Text-Light font-semibold text-[14px] my-[10px]">
          متن درخواست
        </h1>
        <span className="text-red-500 text-[14px] flex justify-center items-center p-[5px]">
          *
        </span>
      </div>
      <div className="">
        <input
          className=" bg-Stroke-Greyscale-Greyscale-200  lg:w-full border-[1px]   rounded-lg  w-full h-[121px] font-Abar_Low_FaNum text-[12px] pr-[10px] border-Surface-General-Surface-Greyscale-200 "
          placeholder=""
          type="  "
        />
      </div>
    </div>
  );
};

export default Article;
