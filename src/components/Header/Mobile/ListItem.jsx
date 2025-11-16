import { useRouter } from "next/router";

// import { useLocation } from "react-router-dom";

const Listitem = ({ list, isHome }) => {
  const router = useRouter();
  const isActive = location.pathname === list.pathname;
  return (
    <>
      <div className="w-[170px] mx-auto ">
        <a
          href={list.pathname}
          className={`${list.title === "حامیان" ? "hidden" : ""}  ${
            isActive ? "bg-Secondary-900 " : ""
          } w-full h-[46px] my-[10px] flex justify-center   rounded-lg  hover:bg-Secondary-900 text-Text-General-White`}
        >
          <h1 className=" font-bold text-[16px]   my-auto leading-[1.6] font-Abar_Low_FaNum     ">
            {list.title}
          </h1>
        </a>
      </div>
    </>
  );
};

export default Listitem;
