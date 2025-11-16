import React from "react";

const Footer = () => {
  const socialIcons = [
    {
      id: 1,
      icon: "/images/footer/aparat-svgrepo-com 1.svg",
      alt: "Aparat",
      link: "#",
    },
    {
      id: 2,
      icon: "/images/footer/Social icon.svg",
      alt: "Instagram",
      link: "#",
    },
    {
      id: 3,
      icon: "/images/footer/youtube.svg",
      alt: "Youtube",
      link: "#",
    },
    {
      id: 4,
      icon: "/images/footer/telegram.svg",
      alt: "Telegram",
      link: "#",
    },
  ];

  return (
    <footer className="w-full h-[164px] lg:h-[50px]  bg-black pt-3 pb-4   md:px-40">
      <div className="w-full h-[24px] flex justify-between items-center  px-6">
        {/* متن سمت راست */}
        <div className="text-white text-sm font-bold font-Abar_Low_FaNum leading-snug">
          شبکه های اجتماعی
        </div>

        {/* آیکون‌های سمت چپ */}
        <div className="flex  gap-2">
          {socialIcons.map((social) => (
            <a
              key={social.id}
              href={social.link}
              className="w-6 h-6 hover:opacity-80 transition-opacity duration-300"
            >
              <img
                src={social.icon}
                alt={social.alt}
                className="w-full h-full object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
