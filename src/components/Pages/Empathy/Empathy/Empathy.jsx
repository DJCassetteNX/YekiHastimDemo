import Header from "../../../Header/Header";
import BreakLine from "./BreakLine/BreakLine";
import Questions from "./Question/Questions";
import SamePain from "./SamePain/SamePain";
import Stands from "./Stands/Stands";
import Footer from "../../../Footer/Footer";
import SupButton from "../../../SupButton/SupButton";

const Empathy = () => {
  return (
    <>
      <Header />
      <div className="w-full flex justify-center pt-[74px]">
        <div className="w-full lg:max-w-[1110px]">
          <SamePain />
          <BreakLine text="محصول تبریک یا تسلیت را انتخاب کنید" />
          <Stands />
          <BreakLine text="سوالات پرتکرار درباره استندهای تسلیت" />
          <Questions />
        </div>
      </div>
      <div className="w-full md:h-[100px] block"></div>
      <SupButton />
      <Footer />
    </>
  );
};

export default Empathy;
