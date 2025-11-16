import { useRouter } from "next/router";

const LableCard = ({ closeModal }) => {
  const router = useRouter();
  const navigate = router.push;
  return (
    <div className="fixed inset-0 z-99 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-[#00000085]/52 backdrop-blur-[6px] pointer-events-auto cursor-pointer"
        aria-hidden="true"
        onClick={closeModal}
      />

      {/* کارت اصلی */}
      <div className="relative lg:w-[412px]  overflow-hidden lg:h-auto w-full rounded-lg shadow-lg pointer-events-auto z-10">
        {/* بک‌گراند با grayscale */}
        <div
          className="absolute bg-white  inset-0 bg-cover bg-center filter grayscale "
          style={{
            backgroundImage: "url('/images/hero/lableCard/lable.png')",
          }}
        />

        {/* محتوای کارت (روی بک‌گراند) */}
        <div className="relative z-10 flex flex-col items-center bg-white/80 p-4 ">
          <img
            src="./images/hero/lableCard/Certificate.png"
            alt=""
            className="w-[350px] h-[622px] lg:w-[364px] lg:h-[647.11px] mx-auto"
          />

          <div className="w-full flex lg:h-auto mt-[10px] flex-col justify-center items-center mx-auto">
            <button
              onClick={() => router.push("/")}
              className="w-[350px] lg:w-[364px] bg-Secondary-900 rounded-lg text-Text-Buttons-White font-Abar_Low_FaNum font-bold text-[14px] h-[54px]"
            >
              بازگشت به صفحه اصلی
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LableCard;
