const Logo = ({ isHome, isProject }) => {
  const logoSrc =
    isHome || isProject
      ? "/images/header/logo-white.svg"
      : "/images/header/logo.svg";
  return (
    <img
      className="w-[180px] h-auto transition-all duration-300 
      "
      src={logoSrc}
      alt=""
    />
  );
};

export default Logo;
