import Keshavarzi from "./Keshavarzi";
import Pasargad from "./Pasargad";

const Account = () => {
  return (
    <div className="w-full my-[10px]   flex justify-center top-[26px]  py-[30px] ">
      <div className="w-full  px-[20px]  max-w-[1110px] lg:px-[40px]  ">
        <div className="lg:flex lg:justify-between py-[30px]  lg:border-b-[1.5px] lg:border-Stroke-Greyscale-Greyscale-200 lg:px-[30px] ">
          <Keshavarzi />
          <Pasargad />
        </div>
      </div>
    </div>
  );
};

export default Account;
