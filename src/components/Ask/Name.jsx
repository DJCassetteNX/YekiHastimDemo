const Name = () => {
  return (
    <div>
      <h1 className="h-[22px] font-Abar_Low_FaNum text-Text-General-Text-Light font-semibold text-[14px] my-[10px]">
        نام و نام خانوادگی
      </h1>
      <div className="bg-Stroke-Greyscale-Greyscale-200 w-full lg:w-[400px] border-[1px] border-Surface-General-Surface-Greyscale-200 h-[58px] rounded-lg flex items-center">
        <img
          className="w-[20px] h-[20px] mr-[20px]"
          src="/images/ask/profile.svg"
          alt=""
        />
        <input
          className="w-full h-[22px] font-Abar_Low_FaNum text-[12px] pr-[10px] "
          placeholder="مسعود حبیبی"
          type="text"
        />
      </div>
    </div>
  );
};

export default Name;
