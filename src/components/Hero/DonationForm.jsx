import { useState } from "react";
import { digitsEnToFa } from "../../utils/persianDigits";
import MotionSlider from "./MotionSlider";
import ProcessingModal from "../ProcessingModal";
const pricePresets = [70000, 140000, 190000];
const minAmount = 200000;
const maxAmount = 80000000;

export default function DonationCard({
  goToSuccess,
  goToFaild,
  goToPaymentSelector,
}) {
  const [amount, setAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleAmountChange = (value) => {
    // Remove all non-digit characters for storage
    const numericValue = value.toString().replace(/\D/g, "");
    const numValue = Number(numericValue);

    // محدود کردن به حداکثر 80 میلیون
    if (numValue > maxAmount) {
      setAmount(String(maxAmount));
    } else {
      setAmount(numericValue || "");
    }
  };

  const formatDisplayValue = (value) => {
    if (!value) return "";
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formatAsToman = (num) => {
    return digitsEnToFa(num.toLocaleString("en-US")) + " تومان";
  };

  const getWords = (num) => {
    const n = Number(num);
    return n > 0 ? digitsEnToFa(n.toLocaleString("en-US")) + " تومان" : "";
  };
  const handlePayment = () => {
    if (!amount) {
      alert(`مبلغ مورد نظر خود را انتخاب کنید ، حداقل مبلغ ۷۰،۰۰۰ هزار تومان `);
      return;
    }

    // نمایش مودال پردازش برای دمو
    setIsProcessing(true);

    // شبیه‌سازی پردازش پرداخت
    setTimeout(() => {
      setIsProcessing(false);
      goToPaymentSelector(); // نمایش صفحه انتخاب نتیجه پرداخت
    }, 2000);
  };
  const clamp = (n, min, max) => Math.min(Math.max(n, min), max);
  const currentAmount = clamp(
    Number(amount) || minAmount,
    minAmount,
    maxAmount
  );

  let progress = ((currentAmount - minAmount) / (maxAmount - minAmount)) * 100;

  // برعکس کردن درصد به خاطر rotate-180
  // progress = 100 - progress;

  return (
    <div className="w-full bg-white rounded-xl   ">
      <div className="flex justify-center gap-2 mb-4">
        {pricePresets.map((val) => (
          <button
            key={val}
            onClick={() => handleAmountChange(val)}
            className={`lg:flex-1 py-2 px-4 rounded transition-all duration-200 text-Text-Greyscale-500 text-sm font-semibold font-Abar_Low_FaNum leading-snug cursor-pointer bg-Surface-General-Surface-Greyscale-200 hover:bg-Primary-500 hover:text-white`}
          >
            {formatAsToman(val)}
          </button>
        ))}
      </div>
      <div className="flex flex-col  lg:flex-row font-Abar_Low_FaNum justify-center items-center gap-3 ">
        <div className="w-full mb-2 mx-auto ">
          <div className="flex items-center gap-4">
            <label className="block text-sm font-medium text-[#353535] mb-1">
              مبلغ دلخواه
            </label>
            <label
              className="text-right font-Abar_Low_FaNum justify-start text-Text-Greyscale-500 text-[10px] font-semibold leading-none tracking-tight "
              htmlFor=""
            >
              دستت بازه...
            </label>
          </div>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={formatDisplayValue(amount)}
            onChange={(e) => handleAmountChange(e.target.value)}
            placeholder="مبلغ دلخواه را وارد کنید"
            className="w-full  bg-Surface-General-Surface-Greyscale-50 mt-4  border border-Stroke-Greyscale-Greyscale-200 px-3 py-2 rounded text-center placeholder:text-Text-Greyscale-500 placeholder:text-[10px] placeholder:font-normal placeholder: font-Abar_Low_FaNum placeholder:leading-none text-[#212121]"
          />
        </div>
        <div className="w-full  flex flex-col justify-center items-center gap-2">
          <div className="h-7 text-Primary-500 text-base font-bold font-Abar_Low_FaNum leading-relaxed ">
            {getWords(amount)}
          </div>

          {/* <input
            type="range"
            min={minAmount}
            max={maxAmount}
            step={100000}
            value={amount}
            onChange={(e) => handleAmountChange(Number(e.target.value))}
            className="donation-range cursor-pointer rotate-180 flex-1 w-[80%] [accent-color:#00AEEF] focus:outline-none"
            dir="rtl"
            style={{ ["--progress"]: `${progress}%` }}
          /> */}
          <MotionSlider
            min={minAmount}
            max={maxAmount}
            step={100000}
            value={Math.min(Number(amount) || minAmount, maxAmount)}
            onChange={(v) => setAmount(String(v))}
          />
          <div className="flex flex-row-reverse justify-between w-[90%]">
            <div className="flex flex-col items-center gap-2">
              <img
                src="/images/hero/Clip path group.svg"
                className="w-5 h-5"
                alt=""
              />
              <span className="text-Text-Greyscale-700 text-[10px] font-normal font-Abar_Low_FaNum leading-none">
                {formatAsToman(minAmount)}
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src="/images/hero/Layer_1.svg"
                className="w-4 h-3.5"
                alt=""
              />
              <span className="text-Text-Greyscale-700 text-[10px] font-normal font-Abar_Low_FaNum leading-none">
                {formatAsToman(maxAmount)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => handlePayment()}
        className=" w-full mt-[20px] p-3 bg-Secondary-900 hover:bg-Secondary-900/90 hover:scale-101 transition-all duration-300 rounded-md flex flex-col justify-center items-center gap-3"
      >
        <button className="self-stretch  text-center justify-center cursor-pointer text-Text-Buttons-White text-sm font-bold font-Abar_Low_FaNum leading-snug">
          حمایت مالی (Demo)
        </button>
      </div>

      {/* مودال پردازش */}
      <ProcessingModal
        isOpen={isProcessing}
        message="Processing payment (Demo)..."
      />
    </div>
  );
}
