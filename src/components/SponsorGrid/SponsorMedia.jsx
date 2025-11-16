const SponsorMedia = () => {
  // تعریف پسوندهای مختلف فایل‌ها
  const getFileExtension = (index) => {
    const extensions = {
      1: "png",
      2: "png",
      3: "png",
      4: "png",
      5: "png",
      6: "png",
      7: "png",
      8: "png",
      9: "jpg",
      10: "png",
      11: "png",
      12: "png",
      13: "svg",
      14: "png",
      15: "png",
    };
    return extensions[index + 1] || "png";
  };

  const images = Array.from(
    { length: 15 },
    (_, i) => `/images/mediasupport/new/${i + 1}.${getFileExtension(i)}`
  );

  return (
    <div className="w-full border-2 border-gray-100 rounded-lg p-3">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-4 justify-items-center">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex justify-center items-center"
          >
            <img
              src={src}
              alt={`media${idx + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorMedia;
