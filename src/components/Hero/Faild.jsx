import { useRouter } from "next/router";

// import { useNavigate } from "react-router-dom";

const Faild = ({ closeModal }) => {
  const router = useRouter();
  // const navigate = useNavigate();
  // const goHome = () => {
  //   navigate("/");
  // };
  const navigate = router.push;
  return (
    <div
      className="fixed inset-0 z-99 flex items-center justify-center min-h-screen "
      onClick={closeModal}
    >
      <div
        className="absolute inset-0  h-full bg-[#00000085]/52 backdrop-blur-[6px] pointer-ev"
        aria-hidden="true"
      />
      {/* کارت اصلی */}
      <div className="relative  lg:w-[412px] lg:h-[327px]  bg-Text-General-White h-full p-5 w-full  overflow-auto  shadow-lg pointer-events-auto z-10">
        {/* آیکون موفقیت */}
        <div className=" w-full flex justify-center rounded-md mt-[100px] lg:mt-0 mb-4">
          <img
            className="w-[80px] h-[80px]"
            src="images/hero/faild.svg"
            alt="موفق"
          />
        </div>

        {/* عنوان */}
        <div className="w-full flex  justify-center mt-[30px]">
          <h1 className="font-Abar_Low_FaNum font-bold text-[22px] text-Text-General-Text-Light">
            خطا در پرداخت
          </h1>
        </div>

        {/* توضیح */}
        <p className="font-Abar_Low_FaNum text-[14px] mx-[20px] text-center leading-relaxed text-gray-600 mt-[50px]">
          مشکلی در پرداخت بوجود آمد.
        </p>

        {/* دکمه ها */}
        <div className="w-full flex mt-[250px] lg:h-auto  flex-col justify-center px-[20px] lg:mt-[10px] ">
          <button
            onClick={() => router.push("/")}
            className="w-full bg-Secondary-900 rounded-lg text-Text-Buttons-White font-Abar_Low_FaNum font-bold text-[14px] h-[54px]"
          >
            بازگشت به صفحه اصلی
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faild;
