import Form from "./Form";

const InvitationToAccompany = () => {
  return (
    <>
      <div className="w-full max-w-[1110px] mx-auto  flex justify-center items-center mt-[58px] mb-[77px]">
        <div className="w-[86%] h-full flex flex-col justify-center items-center gap-15">
          <div className="w-full mt-[20px] mx-auto flex flex-col">
            <div className=" w-full max-w-[1110px] h-[26px]   mx-auto flex justify-center   items-center ">
              <span className="  w-full h-[1px]  bg-Stroke-Greyscale-Greyscale-300 ml-[20px] "></span>
              <div className=" text-base font-bold font-Abar_Low_FaNum text-Primary-500 leading-relaxed whitespace-nowrap bg-gre ">
                دعوت به همراهی
              </div>{" "}
              <span className="w-full h-[1px] bg-Stroke-Greyscale-Greyscale-300 mr-[20px]"></span>
            </div>
          </div>
          <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center gap-12">
            <div className="flex flex-col justify-start items-end gap-16">
              <div className="self-stretch text-justify justify-start text-Text-Greyscale-800 text-sm font-normal font-Abar_Low_FaNum leading-snug">
                ما در مسیر ساختن آینده‌ای امن و پایدار در کنار جامعه جازموریان
                ایستاده‌ایم. برای حمایت از این حرکت، می‌توانید به ما بپیوندید.{" "}
              </div>
              <img src="/images/annualreport/invite.svg" alt="" />
            </div>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default InvitationToAccompany;
