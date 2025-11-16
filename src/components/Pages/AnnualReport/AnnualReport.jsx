import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import KeyAchievements from "../../KeyAchievements/KeyAchievements";
import DataChart from "../../DataChart/DataChart";
import FileDownloadBox from "../../FileDownloadBox/FileDownloadBox";
import EventsCampaigns from "../../EventsCampaigns/EventsCampaigns";
import InvitationToAccompany from "../../InvitationToAccompany/InvitationToAccompany";
import SupButton from "../../SupButton/SupButton";

const AnnualReport = () => {
  return (
    <>
      <Header />
      <div className="w-full   flex justify-center items-center lg:mt-[104px] mt-[90px] mb-[61px]">
        <div className="w-full mx-[20px] max-w-[1110px] h-full flex flex-col justify-center items-start gap-[31px]  ">
          <p className=" text-Primary-500 text-base font-bold font-Abar_Low_FaNum leading-relaxed">
            گزارش عملکرد سالانه "یکی هستیم" در یک نگاه | سال ۱۴۰۳
          </p>
          <p className="text-Text-Greyscale-800 text-sm font-normal font-Abar_Low_FaNum leading-snug w-full ">
            کانون توسعه‌گران جوان "یکی هستیم" طی سال گذشته با همراهی جامعه محلی،
            حامیان و نهادهای دولتی در شهرستان جازموریان، دستاوردهای بزرگی را در
            پروژه‌ی ساخت سرپناه‌های امن برای خانواده‌های کپرنشین رقم زده است.
          </p>
          <img
            src="/images/annualreport/image1.jpg"
            alt=""
            className="w-full max-w-[1110px] bg-amber-200 h-auto lg:h-[502px] object-cover rounded-lg"
          />
        </div>
      </div>
      <KeyAchievements />
      <DataChart />
      <FileDownloadBox />
      <EventsCampaigns />
      <InvitationToAccompany />
      <SupButton />
      <Footer />
    </>
  );
};

export default AnnualReport;
