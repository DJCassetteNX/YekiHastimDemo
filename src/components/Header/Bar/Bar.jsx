import Burger from "./Burger";
import Logo from "./Logo";
import Menu from "./Menu";

const Bar = ({
  isHome,
  isScroll,
  toggleMobileMenu,
  isCard,
  showSupportBtn,
  isProject,
  isScrollProject,
  cardRef,
}) => {
  return (
    <div
      className={`w-full h-[46px] 
        flex justify-between items-center `}
    >
      <Burger
        isHome={isHome}
        isProject={isProject}
        toggleMobileMenu={toggleMobileMenu}
      />
      <Logo isHome={isHome} isProject={isProject} />
      <Menu
        isHome={isHome}
        isProject={isProject}
        isCard={isCard}
        showSupportBtn={showSupportBtn}
        cardRef={cardRef}
      />
    </div>
  );
};

export default Bar;
