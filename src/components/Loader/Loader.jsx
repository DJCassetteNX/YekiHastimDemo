const Loader = ({ text }) => {
  return (
    <div className="flex items-center justify-center min-h-screen text-lg font-bold">
      {text || "در حال بارگذاری..."}
    </div>
  );
};

export default Loader;
