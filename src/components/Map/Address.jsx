const Address = () => {
  return (
    <div
      className="flex-row items-center lg:flex lg:justify-between  lg:border-b-[1.5px] lg:border-Stroke-Greyscale-Greyscale-200 gap-[20px]  
    "
    >
      <div>
        <div className="w-full flex gap-3 py-[10px] ">
          <img className="  " src="/images/map/email.svg" alt="" />
          <h1 className=" text-[14px] text-Text-Greyscale-700 font-Abar_Low_FaNum ">
            info@yekihastimngo.com
          </h1>
        </div>
        <div className="w-full flex gap-3 py-[10px] ">
          <img className=" " src="/images/map/phone.svg" alt="" />
          <h1 className=" text-[14px] text-word font-Abar_Low_FaNum text-Text-Greyscale-700 ">
            ۰۲۱-۲۲۷۵۳۹۵۳ – ۰۹۳۶۱۲۹۳۳۷۸
          </h1>
        </div>
        <div className="w-full flex gap-3 py-[10px] ">
          <img className="" src="/images/map/location.svg" alt="" />
          <h1 className=" text-[14px] text-word font-Abar_Low_FaNum text-Text-Greyscale-700 ">
            استان کرمان، شهرستان جازموریان، شهر زهکلوت، خیابان نصر، کوچه نصر۵،
            پلاک ۱۲۷۸، طبقه همکف
          </h1>
        </div>
        <div className="w-full    flex gap-3 py-[10px] ">
          <img className=" " src="/images/map/location.svg" alt="" />
          <h1 className=" text-[14px] text-word font-Abar_Low_FaNum text-Text-Greyscale-700 ">
            تهران، دزاشیب، خ رمضانی، خ جهانسوز، خ تقی‌رفعت، نبش بن‌بست شهری،
            پلاک ۱، زنگ ۴
          </h1>
        </div>
      </div>
      <div>
        <img
          className="mx-auto  lg:mx-0  w-[325px] h-[325px] object-cover "
          src="/images/map/operator.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Address;
