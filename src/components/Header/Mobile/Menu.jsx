import { useEffect, useState } from "react";
import ListItem from "./ListItem";

const Menu = ({ isHome, showSupportBtn }) => {
  const [menu, setMenu] = useState(null);
  const fetchMenu = async () => {
    try {
      const fakeMenu = [
        {
          id: 1,
          title: "صفحه‌اصلی",
          pathname: "/",
        },
        {
          id: 2,
          title: "درباره‌ما",
          pathname: "/about-us",
        },
        {
          id: 3,
          title: "پروژه‌ها",
          pathname: "/projects",
        },
        {
          id: 4,
          title: "حامیان",
          pathname: "/sponsors",
        },
        {
          id: 5,
          title: "پروژه‌های سرپناه‌من",
          pathname: "/sarpanah-amn",
        },
        {
          id: 6,
          title: "داوطلبین",
          pathname: "/volunteers",
        },
        {
          id: 7,
          title: "گزارش‌عملکرد‌سالانه",
          pathname: "/annual-report",
        },
        {
          id: 8,
          title: "استند تسلیت",
          pathname: "/empathy",
        },
        {
          id: 9,
          title: "سوالات‌متداول",
          pathname: "/faq",
        },
        {
          id: 10,
          title: "ارتباط با ما",
          pathname: "/contact-us",
        },
      ];
      setMenu(fakeMenu);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <div className=" w-full  absolute top-[80px]">
      {menu?.map((item) => {
        return <ListItem list={item} key={item.id} isHome={isHome} />;
      })}
      <div className="w-full h-[20px] flex justify-center mt-[60px]">
        <h1 className="text-Text-Greyscale-800 font-Abar_Low_FaNum font-semibold text-[12px]  leading-[1.6]">
          © تمامی حقوق سایت متعلق به{" "}
          <a href="#" className="text-Surface-General-Surface-General-Brand">
            یکی هستیم
          </a>{" "}
          می‌باشد.{" "}
        </h1>
      </div>
    </div>
  );
};

export default Menu;
