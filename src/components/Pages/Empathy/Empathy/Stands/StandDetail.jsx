import { useEffect, useState, useCallback } from "react";
import Inputs from "./Inputs";
import Header from "../../../../Header/Header";
import Footer from "../../../../Footer/Footer";

const StandDetail = ({ id }) => {
  const [stand, setStand] = useState(null);

  const fetchStands = useCallback(async () => {
    try {
      const data = await fetch(
        "/db.json"
        // "https://djcassettenx.github.io/yeki-api/db.json"
      );
      const res = await data.json();
      const selected = res.stands.find((item) => item.id.toString() === id);
      setStand(selected);
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);

  useEffect(() => {
    fetchStands();
  }, [fetchStands]);
  if (!stand) return <div>در حال بارگذاری...</div>;
  return (
    <>
      <Header />
      <div>
        <div className="w-full justify-center pt-[146px]">
          <div className="w-full h-auto mx-auto  lg:max-w-[1110px] px-[20px] lg:px-0 flex flex-col-reverse lg:flex-row">
            <div className=" flex-row lg:flex lg:flex-col mt-[20px] lg:mt-0 ">
              <div className="font-Abar_Low_FaNum font-bold  text-[16px] leading-[1.6] text-Primary-500 pb-[20px]">
                {stand.title}
              </div>

              <div className="pt-[50px] ">
                <h1 className="font-Abar_Low_FaNum font-semibold text-[14px] leading-[1.6] text-Text-General-Text-Light pb-[10px]">
                  مشخصات بنر
                </h1>
                <h1 className="flex font-Abar_Low_FaNum font-semibold text-[14px] leading-[1.6] text-Text-Greyscale-700">
                  قیمت:{" "}
                  <h1 className="font-Abar_Low_FaNum font-regular text-[14px] leading-[1.6] text-Text-Greyscale-600">
                    {"  "} {stand.price} تومان
                  </h1>
                </h1>
                <h1 className="flex font-Abar_Low_FaNum font-semibold text-[14px] leading-[1.6] text-Text-Greyscale-700">
                  ابعاد:
                  <h1 className="font-Abar_Low_FaNum font-regular text-[14px] leading-[1.6] text-Text-Greyscale-600">
                    {"  "} {stand.size}
                  </h1>
                </h1>
              </div>
              <div className="pt-[50px]">
                <h1 className="font-Abar_Low_FaNum font-semibold text-[14px] leading-[1.6] text-Text-General-Text-Light pb-[10px]">
                  روند اجرایی سفارشات به شرح ذیل می باشد:
                </h1>
                <ul className="">
                  {stand.orderSteps.map((step, index) => (
                    <li
                      key={index}
                      className="font-Abar_Low_FaNum font-regular text-[14px] leading-[1.6] text-Text-Greyscale-600"
                    >
                      {" "}
                      <span className="font-Abar_Low_FaNum font-regular text-[14px] leading-[1.6] text-Text-Greyscale-600">
                        {index + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-[50px]">
                <h1 className="font-Abar_Low_FaNum font-semibold text-[14px] leading-[1.6] text-Text-General-Text-Light pb-[10px]">
                  شرایط سفارش:
                </h1>
                <ul className="">
                  {stand.orderTerms.map((step, index) => (
                    <li
                      key={index}
                      className="font-Abar_Low_FaNum font-regular text-[14px] leading-[1.6] text-Text-Greyscale-600"
                    >
                      {" "}
                      <span className="font-Abar_Low_FaNum font-regular text-[14px] leading-[1.6] text-Text-Greyscale-600">
                        {index + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-[50px]">
                <h1 className="font-Abar_Low_FaNum font-semibold text-[14px] leading-[1.6] text-Text-General-Text-Light pb-[10px]">
                  زمان نمایش بنر در محل:
                </h1>
                <ul className="">
                  {stand.displayTime.map((step, index) => (
                    <li
                      key={index}
                      className="font-Abar_Low_FaNum font-regular text-[14px] leading-[1.6] text-Text-Greyscale-600"
                    >
                      {" "}
                      <span className="font-Abar_Low_FaNum font-regular text-[14px] leading-[1.6] text-Text-Greyscale-600">
                        {index + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <img
              className=" w-[364px] h-[447px]  mx-auto rounded-lg object-cover bg-Greyscale-600  "
              src={stand.image}
              alt={stand.title}
            />
          </div>
          <div className="w-full px-[20px] lg:px-0 max-w-[1110px] lg:mx-auto">
            {" "}
            <Inputs />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StandDetail;
