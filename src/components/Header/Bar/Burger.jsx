const Burger = ({ isHome, toggleMobileMenu, isProject }) => {
  const burgerSrc =
    isHome || isProject
      ? "/images/header/hamburger-white.svg"
      : "/images/header/hamburger.svg";
  return (
    <div>
      <img
        src={burgerSrc}
        className=" lg:hidden"
        alt=""
        onClick={toggleMobileMenu}
      />
    </div>
  );
};

export default Burger;
