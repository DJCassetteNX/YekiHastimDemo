import Balad from "./Balad";
import Info from "./Info";
import Text from "./Text";

const Map = () => {
  return (
    <div className="w-full h-auto flex justify-center mt-[70px]">
      <div className="w-full px-[20px] lg: max-w-[1110px] lg:px-[40px]   ">
        <Text />
        <Balad />
        <Info />
      </div>
    </div>
  );
};

export default Map;
