import Listitem from "./ListItem";
import Menu from "./Menu";

const Mobile = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed w-full  top-0 backdrop-blur-md bg-Border-Natural-400 lg:hidden transition-all duration-300 z-55 ${
        isOpen ? "block" : "hidden"
      } `}
    >
      <div
        className="w-full h-[833px] 
      "
      >
        <img
          className="w-full h-full relative top-[-200px]    "
          src="/images/header/Vector-blue.svg "
          alt=""
        />
        <div className=" w-full h-[79px] absolute top-0 flex justify-between items-center p-[20px] ">
          <img
            className="w-[17.gpx] h-[17.5px]"
            src="/images/header/close.svg"
            alt=""
            onClick={onClose}
          />
          <img src="/images/header/logo-white.svg " className="" alt="" />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Mobile;
