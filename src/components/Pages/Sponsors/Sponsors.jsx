import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SponsorBrand from "../../SponsorGrid/SponsorBrand";
import SponsorMedia from "../../SponsorGrid/SponsorMedia";
import SponsorFaces from "../../SponsorGrid/SponsorFaces";

const Sponsors = () => {
  return (
    <>
      <Header />
      <div className="w-full flex justify-center items-center mt-[92px]">
        <div className="w-[86%] justify-start text-Primary-500 text-base font-bold font-Abar_Low_FaNum leading-relaxed text-right">حامیان ما</div>
      </div>
      <div className="w-full flex justify-center items-center mt-[51px]">
        <div className="w-[86%] ">
          <SponsorBrand />
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-[51px]">
        <div className="w-[86%]">
          <SponsorMedia />
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-[51px] mb-[170px]">
        <div className="w-[86%]">
          <SponsorFaces />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Sponsors;
