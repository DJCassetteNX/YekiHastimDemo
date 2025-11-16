import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
const SupButton = ({ cardRef }) => {
  const router = useRouter() || useRouter();
  const { pathname } = router;
  const isHome = pathname === "/";
  const [isCard, setIsCard] = useState(false);

  useEffect(() => {
    if (!isHome || !cardRef?.current?.card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCard(!entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(cardRef.current?.card);

    return () => {
      if (cardRef.current?.card) observer.unobserve(cardRef.current.card);
    };
  }, [cardRef, isHome]);

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
    <div>
      <div
        className={` w-full h-[114px] bg-Primary-White z-50 ${
          isHome ? (isCard ? "" : "hidden") : ""
        } fixed flex justify-center items-center bottom-0 lg:hidden  `}
      >
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
          className={`  box-border w-[364px] h-[46px] text-[14px] font-bold   my-auto  justify-center items-center bg-Secondary-900 rounded-lg font-Abar_Low_FaNum text-Text-General-White  `}
        >
          Financial Support (Demo)
        </button>
      </div>
    </div>
  );
};

export default SupButton;
