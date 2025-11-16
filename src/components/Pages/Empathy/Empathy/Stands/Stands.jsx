import { useEffect, useState } from "react";
import Link from "next/link";

const Stands = () => {
  const [stands, setStands] = useState([]);
  const fetchStands = async () => {
    try {
      const data = await fetch("/db.json");
      const res = await data.json();
      setStands(res.stands);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchStands();
  }, []);
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[35px] px-[20px] lg:px-[45px] py-[30px]">
      {stands.map((item) => (
        <div
          key={item.id}
          className=" mx-auto w-[364px]   lg:w-[237px]    border-[1.1px] border-Stroke-Greyscale-Greyscale-300 p-[7px] rounded-lg overflow-hidden flex flex-col gap-[8px] md:gap-[10px] lg:gap-[13px]"
        >
          <img
            src={item.image}
            alt={item.title}
            className=" w-full rounded-lg object-cover bg-Greyscale-600 "
          />
          <h2 className="font-Abar_Low_FaNum text-[14px] font-semibold text-Text-Additionals-Absolute-900 text-center leading-[1.6] ">
            {item.title}
          </h2>
          <h2 className="font-Abar_Low_FaNum text-[12px] font-regular text-Primary-700 mt-[6px] text-center leading-[1.6]">
            {item.price} تومان
          </h2>
          <Link
            href={`/empathy/${item.id}`}
            className="text-center w-full h-[35px] bg-Secondary-900 hover:bg-Secondary-800 hover:shadow-md hover:scale-[1.02] font-bold text-white text-[12px] font-Abar_Low_FaNum py-[6px] rounded-md leading-[1.6] transition-all duration-200"
          >
            سفارش
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Stands;
