import React from "react";

const DataChart = () => {
  return (
    <div className="w-full  flex justify-center items-center">
      <div className="w-[86%] max-w-[1110px] flex flex-col gap-7">
        <div className="w-full  flex flex-col mb-[20px]">
          <div className=" w-full max-w-[1110px] h-[26px]   mx-auto flex justify-center   items-center ">
            <span className="  w-full h-[1px]  bg-Stroke-Greyscale-Greyscale-300 ml-[20px] "></span>
            <div className=" text-base font-bold font-Abar_Low_FaNum text-Primary-500 leading-relaxed whitespace-nowrap bg-gre ">
              داده‌های قابل نمایش با نمودار
            </div>{" "}
            <span className="w-full h-[1px] bg-Stroke-Greyscale-Greyscale-300 mr-[20px]"></span>
          </div>
        </div>
        {/* کارت اول  */}
        <div className="w-full flex flex-col-reverse   p-4 bg-Surface-General-Surface-General-White rounded-[20px] outline-2 outline-offset-[-2px] outline-Stroke-Greyscale-Greyscale-200 lg:flex-row lg:justify-between gap-4.5">
          <div className="w-full flex justify-center">
            {" "}
            <img
              src="/images/annualreport/image2.jpg"
              className="w-[328px] lg:w-[454px] h-[275px] object-cover rounded-lg "
            />
          </div>
          <div className=" w-full  flex flex-col-reverse lg:flex-row justify-center items-center gap-7.5">
            <div className=" flex justify-end items-center">
              <div className="w-72 inline-flex flex-col justify-start items-end gap-7.5">
                <div className="self-stretch text-center lg:text-right justify-start text-Text-General-Text-Light text-base font-bold font-Abar_Low_FaNum leading-relaxed">
                  میزان پیشرفت پروژه
                </div>
                <div className="self-stretch h-24 flex flex-col justify-center items-end gap-2">
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="flex justify-end items-center gap-2">
                      <div className="w-3 h-3 relative bg-Surface-General-Surface-General-Brand rounded" />
                      <div className="w-24 text-right justify-center text-Text-Greyscale-800 text-sm font-normal font-Abar_Low_FaNum leading-snug">
                        بررسی شده
                      </div>
                    </div>
                    <div className="justify-start text-neutral-700 text-xs font-bold font-Abar_Low_FaNum leading-tight">
                      ۴۰۰+ خانواده
                    </div>
                  </div>
                  <div
                    data-component="Divider"
                    data-dark="False"
                    className="self-stretch h-0 relative"
                  >
                    <div className="w-72 h-0 left-0 top-0 absolute outline-1 outline-offset-[-0.50px] outline-Stroke-Colors-Border-Single-Stroke-Divider-Light"></div>
                  </div>
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="flex justify-end items-center gap-2">
                      <div className="w-3 h-3 relative bg-Surface-Others-Orange rounded" />
                      <div className="w-32 text-right justify-center text-Text-Greyscale-800 text-sm font-normal font-Abar_Low_FaNum leading-snug">
                        واجد شرایط
                      </div>
                    </div>
                    <div className="justify-start text-neutral-700 text-xs font-bold font-Abar_Low_FaNum leading-tight">
                      ۲۵۰ خانواده
                    </div>
                  </div>
                  <div
                    data-component="Divider"
                    data-dark="False"
                    className="self-stretch h-0 relative"
                  >
                    <div className="w-72 h-0 left-0 top-0 absolute outline-1 outline-offset-[-0.50px] outline-Stroke-Colors-Border-Single-Stroke-Divider-Light"></div>
                  </div>
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="flex justify-end items-center gap-2">
                      <div className="w-3 h-3 relative bg-Surface-Alerts-Success rounded" />
                      <div className="w-28 text-right justify-center text-Text-Greyscale-800 text-sm font-normal font-Abar_Low_FaNum leading-snug">
                        خانه ساخته‌شده
                      </div>
                    </div>
                    <div className="justify-start text-neutral-700 text-xs font-bold font-Abar_Low_FaNum leading-tight">
                      ۱۳۳ خانواده
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="  flex  items-center">
              <img
                src="/images/annualreport/pishraft.svg"
                className="w-44 h-44  relative overflow-hidden"
              />
            </div>
          </div>
        </div>
        {/* کارت دوم  */}
        <div className="w-full    p-4 bg-Surface-General-Surface-General-White rounded-[20px] outline-2 outline-offset-[-2px] outline-Stroke-Greyscale-Greyscale-200 flex-col justify-center items-center lg:flex lg:flex-row gap-4 ">
          <div className="w-full   flex flex-col-reverse lg:flex-row justify-center items-center ">
            <div className="w-full flex justify-center items-center">
              <div className="w-full inline-flex  flex-col justify-start items-center gap-6.5">
                <div className="w-full flex flex-col justify-center items-center  gap-2">
                  <div className="text-Text-General-Text-Light text-base font-bold  font-Abar_Low_FaNum leading-relaxed">
                    ارزیابی تأثیرات پروژه
                  </div>
                  <div className="text-Text-Greyscale-800 text-[10px] font-semibold font-Abar_Mid leading-none">
                    میانگین امتیاز شاخص‌ها قبل و بعد از سکونت در خانه‌ی توپی
                  </div>
                </div>
                <div className="  h-24 flex flex-col justify-center items-center gap-2">
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="flex justify-end items-center gap-2">
                      <div className="w-3 h-3 relative bg-Surface-General-Surface-General-Brand rounded" />
                      <div className="w-24 text-right justify-center text-Text-Greyscale-800 text-sm font-normal font-Abar_Low_FaNum leading-snug">
                        سلامت
                      </div>
                    </div>
                  </div>
                  <div
                    data-component="Divider"
                    data-dark="False"
                    className="self-stretch h-0 relative"
                  >
                    <div className="w-52 h-0 right-0 top-0 absolute outline-1 outline-offset-[-0.50px] outline-Stroke-Colors-Border-Single-Stroke-Divider-Light"></div>
                  </div>
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="flex justify-end items-center gap-2">
                      <div className="w-3 h-3 relative bg-Surface-Others-Orange rounded" />
                      <div className="w-32 text-right justify-center text-Text-Greyscale-800 text-sm font-normal font-Abar_Low_FaNum leading-snug">
                        امنیت محیطی
                      </div>
                    </div>
                  </div>
                  <div
                    data-component="Divider"
                    data-dark="False"
                    className="self-stretch  h-0 relative"
                  >
                    <div className="w-52 h-0  right-0 top-0 absolute outline-1 outline-offset-[-0.50px] outline-Stroke-Colors-Border-Single-Stroke-Divider-Light"></div>
                  </div>
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="flex justify-end items-center gap-2">
                      <div className="w-3 h-3 relative bg-Surface-Alerts-Success rounded" />
                      <div className="w-28 text-right justify-center text-Text-Greyscale-800 text-sm font-normal font-Abar_Low_FaNum leading-snug">
                        ارتباطات اجتماعی
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="pb-[30px]"
              src="./images/annualreport/arzyabi.svg"
              alt=""
            />
          </div>
          <div className="w-full flex justify-center">
            {" "}
            <img
              src="/images/annualreport/image3.png"
              className="w-[328px] lg:w-[454px] h-[275px] object-cover rounded-lg "
            />
          </div>
        </div>
        {/* کارت سوم  */}
        <div className="w-full  p-4 bg-Surface-General-Surface-General-White rounded-[20px] outline-2 outline-offset-[-2px] outline-Stroke-Greyscale-Greyscale-200 flex flex-col-reverse lg:flex-row justify-start items-center gap-4">
          <div className="w-full flex justify-center">
            {" "}
            <img
              src="/images/annualreport/image-4.jpg"
              className="w-[328px] lg:w-[454px] h-[275px] object-cover rounded-lg "
            />
          </div>
          <div className="w-full  flex flex-col-reverse lg:flex-row  justify-center items-center gap-7.5">
            <div className="w-full  flex justify-center items-center">
              <div className="w-72 inline-flex flex-col justify-start items-end gap-7">
                <div className="self-stretch text-center lg:text-right justify-start text-Text-General-Text-Light text-base font-bold font-Abar_Low_FaNum leading-relaxed">
                  ترکیب منابع انسانی
                </div>
                <div className="self-stretch h-24 flex flex-col justify-center items-end gap-2">
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="flex justify-end items-center gap-2">
                      <div className="w-3 h-3 relative bg-Surface-General-Surface-General-Brand rounded" />
                      <div className="w-full text-right justify-center text-Text-Greyscale-800 text-sm font-normal font-Abar_Low_FaNum leading-snug">
                        نیروهای محلی
                      </div>
                    </div>
                    <div className="justify-start text-neutral-700 text-xs font-extrabold font-Abar_Low_FaNum leading-tight">
                      ۶۵%
                    </div>
                  </div>
                  <div
                    data-component="Divider"
                    data-dark="False"
                    className="self-stretch h-0 relative"
                  >
                    <div className="w-72 h-0 left-0 top-0 absolute  outline-1 outline-offset-[-0.50px] outline-Stroke-Colors-Border-Single-Stroke-Divider-Light"></div>
                  </div>
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="flex justify-end items-center gap-2">
                      <div className="w-3 h-3 relative bg-Surface-Others-Orange rounded" />
                      <div className="w-32 text-right justify-center text-Text-Greyscale-800 text-sm font-normal font-Abar_Low_FaNum leading-snug">
                        <div>تیم تخصصی</div>
                        <div>(معماران، مدیران، </div>
                        <div>روابط عمومی) : </div>
                      </div>
                    </div>
                    <div className="justify-start text-neutral-700 text-xs font-extrabold font-Abar_Low_FaNum leading-tight">
                      ۳۵%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <img
                src="/images/annualreport/manabe.svg"
                className="w-44 h-44 relative overflow-hidden"
              />
            </div>
          </div>
        </div>
        {/* کارت چهارم  */}
        <div className="w-full p-4 bg-Surface-General-Surface-General-White rounded-[20px] outline-2 outline-offset-[-2px] outline-Stroke-Greyscale-Greyscale-200 flex flex-col lg:flex-row justify-start items-center gap-4">
          <div className="w-full  flex flex-row justify-center items-center gap-7.5">
            <div className="w-full inline-flex flex-col justify-start items-end gap-6">
              <div className="self-stretch text-right justify-start text-Text-General-Brand text-sm font-bold font-Abar_Low_FaNum leading-snug">
                تأثیر اجتماعی و منطقه‌ای
              </div>
              <div className="self-stretch text-justify justify-start text-Text-Greyscale-800 text-sm font-normal font-Abar_Low_FaNum leading-snug">
                <div className="flex flex-row  justify-start items-center gap-2 ">
                  <div
                    aria-label="status"
                    className="status status-neutral"
                  ></div>
                  <p>تقویت حس مالکیت اجتماعی</p>
                </div>
                <div className="flex flex-row justify-start items-center gap-2">
                  <div
                    aria-label="status"
                    className="status status-neutral"
                  ></div>
                  <p>ارتباط پایدار میان جامعه محلی و بازار منطقه</p>
                </div>
                <div className="flex flex-row  justify-start items-center gap-2">
                  <div
                    aria-label="status"
                    className="status status-neutral"
                  ></div>
                  <p>افزایش مشارکت زنان، نوجوانان و گروه‌های حاشیه‌نشین</p>
                </div>
                <div className="flex flex-row  justify-start items-center gap-2">
                  <div
                    aria-label="status"
                    className="status status-neutral"
                  ></div>
                  <p>الگوی موفق برای اجتماع‌سازی و توسعه محلی در مناطق محروم</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            {" "}
            <img
              src="/images/annualreport/image5.png"
              className="w-[328px] lg:w-[454px] h-[275px] object-cover rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataChart;
