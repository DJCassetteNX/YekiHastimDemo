import Member from "./Member";
import Text from "./Text";

const Members = () => {
  return (
    <div>
      <div className="w-full  flex justify-center    ">
        <div className="w-full px-[20px] lg:max-w-[1110px]  lg:px-[40px] mob:mt-[66px] lg:mt-[92px]   ">
          <Text />
          <Member />
        </div>
      </div>
    </div>
  );
};

export default Members;
