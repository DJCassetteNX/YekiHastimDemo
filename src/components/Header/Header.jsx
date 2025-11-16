import { useRouter } from "next/router";
import Bar from "./Bar/Bar";
import { useEffect, useState } from "react";
import Mobile from "./Mobile/Mobile";

const Header = ({ heroRef, cardRef, projectHeroRef }) => {
  const router = useRouter();
  const { pathname } = router; // معادل useLocation().pathname
  const isHome = pathname === "/";
  const isProject = pathname === "/projects";
  const [isScroll, setIsScroll] = useState(false);
  const [isScrollProject, setIsScrollProject] = useState(false);
  const [isCard, setIsCard] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const headerClasses = isHome
    ? isScroll
      ? " bg-gradient-to-r from-Primary-500 to-Primary-500/80 backdrop-blur-[34px]   "
      : "bg-transparent "
    : isProject
    ? isScrollProject
      ? " bg-gradient-to-r from-Primary-500 to-Primary-500/80 backdrop-blur-[34px]   "
      : "bg-transparent  "
    : "border-Stroke-Greyscale-Greyscale-200 border-b-border border-b-[1.5px] bg-Surface-General-Surface-General-White backdrop-blur-[11px] ";

  useEffect(() => {
    if (!isHome || !heroRef?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScroll(!entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "-130px 0px 0px 0px",
      }
    );

    observer.observe(heroRef.current.hero);

    return () => {
      if (heroRef.current?.hero) observer.unobserve(heroRef.current?.hero);
    };
  }, [heroRef, isHome]);
  useEffect(() => {
    if (!isHome || !cardRef?.current?.card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCard(!entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "-90px 0px 0px 0px",
      }
    );

    observer.observe(cardRef.current?.card);

    return () => {
      if (cardRef.current?.card) observer.unobserve(cardRef.current.card);
    };
  }, [cardRef, isHome]);
  useEffect(() => {
    if (!isProject || !projectHeroRef?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrollProject(!entry.isIntersecting); // جدا از isScroll برای پروژه
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px 0px 0px",
      }
    );

    observer.observe(projectHeroRef.current);

    return () => {
      if (projectHeroRef.current) observer.unobserve(projectHeroRef.current);
    };
  }, [projectHeroRef, isProject]);
  return (
    <>
      {/* بنر دمو */}
      <div className="fixed top-0 w-full bg-yellow-400 text-black text-center py-2 text-sm font-bold z-[60] font-Abar_Low_FaNum">
        🚀 This is a demo version - in the main project, the payment gateway is
        active
      </div>

      <div
        className={`fixed top-[36px] !z-50 w-full  flex justify-center   
      ${headerClasses} `}
      >
        <div
          className={`w-full ${
            isHome
              ? isCard
                ? "lg:w-[1254px] "
                : "lg:w-[1110px]"
              : "lg:w-[1254px]"
          }   h-[79px]  flex justify-center items-center px-[20px] lg:px-[5px]  `}
        >
          <Bar
            isHome={isHome}
            isScroll={isScroll}
            isScrollProject={isScrollProject}
            isProject={isProject}
            isCard={isCard}
            showSupportBtn={isHome ? isCard : true}
            toggleMobileMenu={() => setIsMobileOpen(true)}
            cardRef={cardRef}
          />
        </div>

        <Mobile
          isOpen={isMobileOpen}
          onClose={() => setIsMobileOpen(false)}
          isCard={isCard}
          showSupportBtn={isHome ? isCard : true}
        />
      </div>
    </>
  );
};

export default Header;
