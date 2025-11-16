import { useEffect, useState } from "react";

const Member = () => {
  const [member, setMember] = useState(null);
  const fetchMember = async () => {
    try {
      let data = await fetch("/db.json");
      let res = await data.json();
      setMember(res.members);
    } catch (error) {
      console.log("Failed to fetch members:", error.message);
      // Fallback data in case of error
      setMember([]);
    }
  };
  useEffect(() => {
    fetchMember();
  }, []);
  return (
    <div className="w-full  h-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[8px] md:gap-[15px] lg:gap-[30px] xl:gap-[54px] pt-[20px] mb-[100px]  ">
      {member?.map((item) => {
        return (
          <div
            key={item.id}
            className=" mx-auto w-[178px] md:w-[200px]  lg:w-[220px] xl:w-[236px] h-[260px] md:h-[310px] lg:h-[346px]  border-[1.1px] border-Stroke-Greyscale-Greyscale-300 p-[7px] rounded-lg overflow-hidden flex flex-col gap-[8px] md:gap-[10px] lg:gap-[13px]"
          >
            {item.image ? (
              <img
                className=" w-full h-[185px] md:h-[210px] lg:h-[246px] rounded-lg object-cover bg-Greyscale-600 "
                src={item.image}
                alt=""
              />
            ) : (
              <div className="w-full mob:h-[185px] md:h-[210px] lg:h-[246px] rounded-lg bg-Surface-General-Surface-Greyscale-50   flex items-center justify-center "></div>
            )}
            <div className="w-[163px] h-[50px]  flex flex-col  text-center mx-auto gap-[2.54px] md:gap-[3px] lg:gap-[3.68px]">
              <h1 className="font-Abar_Low_FaNum font-semibold text-[10px] lg:text-[14px]  leading-[1.6] text-Text-Additionals-Absolute-900  ">
                {item.name}
              </h1>
              <h1 className="font-Abar_Low_FaNum font-regular text-[9px] lg:text-[12px]  leading-[1.6] text-Primary-700">
                {item.position}
              </h1>
              <h1 className="font-Abar_Low_FaNum font-regular text-[9px] lg:text-[12px] leading-[1.6] text-Primary-800">
                شروع فعالیت : {item.jobStart}
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Member;
