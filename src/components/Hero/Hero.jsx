import React, { forwardRef, useImperativeHandle, useRef } from "react";
import DonationForm from "./DonationForm";
import Header from "../Header/Header";

const Hero = forwardRef(
  ({ isModal, goToSuccess, goToFaild, goToPaymentSelector }, ref) => {
    const heroRef = useRef(null);
    const cardRef = useRef(null);

    useImperativeHandle(ref, () => ({
      hero: heroRef.current,
      card: cardRef.current,
    }));

    return (
      <div className="w-full h-[509px] md:h-[550px] lg:h-[610px] lx:h-[700px] 2xl:h-[800px] flex flex-col relative z-5 mb-[265px] bg-radial from-[#B8E6F9] to-Surface-General-Surface-General-Brand">
        {/* دیو بالایی - عکس */}

        <div ref={heroRef} className="w-full  ">
          <img
            className=" mt-[150px] sm:mt-[120px] md:mt-[100px] lg:mt-[50px] xl:mt-[20px]"
            src="/images/hero/Hands.png"
            alt=""
          />
        </div>

        {/* دیو پایینی - کارت */}
        <div
          ref={cardRef}
          className="w-full  p-4 absolute top-[90%] left-0 flex justify-center"
        >
          <div className="w-[620px]  h-[314px]  rounded-sm mx-auto flex flex-col">
            {/* دیو پایینی - 90% */}
            <div className="w-full h-[90%] flex justify-center items-center">
              <div className=" w-[370px] lg:w-[686px] px-4 pt-6 pb-4 bg-white rounded-lg backdrop-blur-sm inline-flex flex-col justify-start items-center gap-5">
                <div className="self-stretch flex-col lg:flex lg:flex-row justify-center items-center gap-3">
                  <div className="flex-col lg:flex lg:flex-row justify-start items-center gap-3">
                    <div className="text-center justify-start text-Text-General-Text-Light text-lg font-semibold font-Abar_Low_FaNum leading-7">
                      کمک تو بلوکی برای ساختن
                    </div>
                    <div className="text-center justify-start text-Primary-500 text-lg font-semibold font-Abar_Low_FaNum leading-7">
                      #سرپناه_امن
                    </div>
                  </div>
                  <div className="text-center justify-start">
                    <span className="text-Text-Greyscale-700 text-xs font-normal font-Abar_Low_FaNum leading-tight tracking-tight">
                      برای هموطنان کپرنشین جازموریان
                    </span>
                    <span className="text-Text-Greyscale-800 text-xs font-normal font-Abar_Low_FaNum leading-tight tracking-tight">
                      #باهم_بسازیم
                    </span>
                  </div>
                </div>
                <div className="w-[370px] lg:w-[686px]  flex flex-col justify-start items-start">
                  <div className="  self-stretch py-3 bg-stone-50 rounded-tl-lg rounded-tr-lg  outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex justify-center items-center gap-2.5">
                    <div className="text-center justify-start text-Text-General-Text-Light text-sm font-semibold font-Abar_Low_FaNum leading-snug">
                      بلوک های فعال برای پرداخت
                    </div>
                  </div>
                  {/* سه تا دکمه هزارتومانی */}
                  <div className="self-stretch p-3 bg-white rounded-bl-lg rounded-br-lg border-l border-r border-b border-zinc-300 flex flex-col justify-start items-center gap-4">
                    <div className="self-stretch flex flex-col justify-start items-start gap-3">
                      <DonationForm
                        goToSuccess={goToSuccess}
                        goToFaild={goToFaild}
                        goToPaymentSelector={goToPaymentSelector}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Hero;
