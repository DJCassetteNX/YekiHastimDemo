const SponsorFaces = () => {
  // تعداد سلول‌ها
  const count = 14;

  return (
    <div className="w-full border-2 border-gray-100 rounded-lg p-3">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 justify-items-center">
        {Array.from({ length: count }).map((_, idx) => (
          <div
            key={idx}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 relative flex justify-center items-center"
          >
            <img
              src="/images/facesupport/Ellipse.svg"
              alt="face-circle"
              className="w-full h-full object-contain"
            />
            <img
              src="/images/facesupport/Edit Square.svg"
              alt="edit-icon"
              className="absolute w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bottom-0 right-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorFaces;
