import React, { useState, useEffect } from "react";

const SupportButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`hidden h-[46px] w-[154px] p-[12px] mt-[15px] lg:block bg-Secondary-900 hover:shadow-lg text-white text-base whitespace-nowrap font-bold gap-3 font-Abar_Low_FaNum leading-snug rounded-md transition-all duration-300 ${
        isScrolled
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-full pointer-events-none"
      }`}
    >
      حمایت مالی (Demo)
    </button>
  );
};

export default SupportButton;
