import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import VolunteersForm from "../../../components/VolunteersForm/VolunteersForm";
import SupButton from "../../SupButton/SupButton";

const Volunteers = () => {
  return (
    <>
      <Header />
      <div className="w-full flex justify-center items-center mt-[92px]">
        <div className="w-full max-w-[1110px] mx-[20px]  flex flex-col justify-center items-start gap-7.5">
          <div className="justify-start text-Primary-500 text-base font-bold font-Abar_Low_FaNum leading-relaxed text-right">
            داوطلبین
          </div>
          <div className="self-stretch text-justify justify-start text-Text-Greyscale-800 text-sm font-normal font-Abar_Low_FaNum leading-[1.6]">
            اگر باور دارید که در غم، شادی و امید می‌توان یکی بود، جای شما در
            کنار ماست. با ثبت‌نام به‌عنوان داوطلب در پروژه‌های «یکی هستیم»، بخشی
            از مسیر همدلی و ساختن آینده‌ای بهتر باشید. برای همراهی فرم زیر را
            تکمیل نمایید.
          </div>
        </div>
      </div>
      <div className="w-full flex  justify-center items-center mt-[51px] mb-[66px]">
        <div className="w-[86%] max-w-[1110px] flex flex-col-reverse lg:flex-row justify-between items-center gap-16 ">
          <VolunteersForm />
          <img
            className=" w-full max-w-[661px]   lg:w-[570px] xl:w-[661px] h-auto p-[20px]"
            src="./images/annualreport/invite.svg"
            alt=""
          />
        </div>
      </div>
      <SupButton />
      <Footer />
    </>
  );
};

export default Volunteers;
