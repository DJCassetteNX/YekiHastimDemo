import FrequentlyQuestion from "./FrequentlyQuestion/FrequentlyQuestion";
import Svg from "./Svg/Svg";
import Text from "./Text/Text";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import SupButton from "../../SupButton/SupButton";

const Faq = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen flex flex-col">
        {/* محتوای اصلی */}
        <div className="flex-1 relative">
          <div className="w-full flex px-[10px] max-w-[1110px] mx-auto items-center mt-[60px] lg:mt-[110px] ">
            {" "}
            <Text />
          </div>
          <div className="w-full flex flex-col justify-center items-center lg:flex-row-reverse max-w-[1110px]   mx-auto  mb-[50px]     transition-all duration-300 ease-linear">
            <Svg />
            <FrequentlyQuestion />
          </div>
        </div>

        {/* Footer در پایین */}
        <Footer />
        <SupButton />
      </div>
    </>
  );
};

export default Faq;
