import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Listitem from "./Listitem";

const Menu = ({ isHome, isCard, showSupportBtn, isProject, cardRef }) => {
  const [menu, setMenu] = useState(null);
  const router = useRouter();
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
          pathname: "/aboutus",
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
          title: "پروژه‌های سرپناه‌امن",
          pathname: "/sarpanahamn",
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

  // useEffect برای تشخیص تغییر route و اسکرول به donation card
  useEffect(() => {
    if (isHome && cardRef?.current?.card) {
      // بررسی localStorage برای flag
      const shouldScroll = localStorage.getItem("shouldScrollToCard");
      if (shouldScroll === "true") {
        cardRef.current.card.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        setTimeout(() => {
          if (cardRef.current?.card) {
            cardRef.current.card.click();
          }
          // پاک کردن flag از localStorage
          localStorage.removeItem("shouldScrollToCard");
        }, 500);
      }
    }
  }, [isHome, cardRef]);
  return (
    <div className=" mob:hidden w-full  flex lg:flex  items-center justify-start  h-[45px]      ">
      <div className="w-full flex justify-end items-center">
        {menu?.map((item) => {
          return (
            <Listitem
              list={item}
              key={item.id}
              isHome={isHome}
              isCard={isCard}
              isProject={isProject}
            />
          );
        })}
        {showSupportBtn && (
          <button
            onClick={() => {
              if (isHome) {
                // اگر در صفحه home هستیم، روی donation card کلیک کنیم
                if (cardRef?.current?.card) {
                  cardRef.current.card.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                  setTimeout(() => {
                    if (cardRef.current?.card) {
                      cardRef.current.card.click();
                    }
                  }, 500);
                }
              } else {
                // اگر در صفحه دیگری هستیم، به home برویم و flag را در localStorage ذخیره کنیم
                localStorage.setItem("shouldScrollToCard", "true");
                router.push("/");
              }
            }}
            className={` box-border flex lg:w-[154px] h-[46px] text-[14px] font-bold   my-auto  justify-center items-center bg-Secondary-900 rounded-lg font-Abar_Low_FaNum text-Text-General-White  `}
          >
            حمایت مالی (Demo)
          </button>
        )}
      </div>
    </div>
  );
};

export default Menu;
