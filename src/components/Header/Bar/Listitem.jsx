import { useRouter } from "next/router";
import Link from "next/link";

const Listitem = ({ list, isHome, isCard, isProject }) => {
  const router = useRouter();
  return (
    <>
      <div className=" mob:hidden lg:block h-[35px]  w-auto flex items-center  ">
        <Link
          href={list.pathname}
          className={`
    h-full flex rounded-lg box-border tab:mx-[2px] xl:mx-[1px]
    ${
      router.pathname === list.pathname
        ? "bg-Secondary-900 !text-Text-General-White "
        : ""
    }
    ${
      router.pathname === list.pathname && (isHome || isProject)
        ? "!text-Text-General-White"
        : ""
    }
    hover:bg-Secondary-900 hover:!text-Text-Buttons-White
    ${
      isHome || isProject
        ? "text-Text-Buttons-White"
        : "text-Text-Greyscale-700"
    }
  `}
        >
          <h1 className=" text-word  font-bold lg:text-[10px] xl:text-[12px] my-auto lg:px-[7px] xl:px-[13px]    font-Abar_Low_FaNum  ">
            {list.title}
          </h1>
        </Link>
      </div>
    </>
  );
};

export default Listitem;
