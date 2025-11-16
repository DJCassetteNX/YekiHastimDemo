import Email from "./Email";
import Name from "./Name";

const Information = () => {
  return (
    <div className="lg:flex lg:justify-between py-[10px]">
      <Name />
      <Email />
    </div>
  );
};

export default Information;
