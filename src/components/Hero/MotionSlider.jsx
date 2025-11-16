import { motion } from "framer-motion";
import { useState, useRef } from "react";

export default function MotionSlider({ min, max, step, value, onChange }) {
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

  // محدود کردن مقدار به محدوده مجاز
  const clampedValue = Math.min(Math.max(value, min), max);

  // درصد واقعی (برای پر شدن ریل از چپ) - محدود به 100%
  const rawPercent = ((clampedValue - min) / (max - min)) * 100;
  const percent = Math.min(100, Math.max(0, rawPercent));

  // تولید 12 نقطه مگنت با اعداد رند
  const generateMagnetPoints = () => {
    const points = [];
    const range = max - min;
    const interval = range / 11; // 12 نقطه = 11 فاصله

    for (let i = 0; i < 12; i++) {
      const pointValue = min + interval * i;
      const roundedValue = Math.round(pointValue / step) * step;
      const pointPercent = ((roundedValue - min) / (max - min)) * 100;
      points.push({
        value: roundedValue,
        percent: pointPercent,
      });
    }
    return points;
  };

  const magnetPoints = generateMagnetPoints();

  // هندل تغییر مقدار (برعکس کردن برای کاربر)
  const handleChange = (e) => {
    const inputVal = Number(e.target.value);
    const reversedVal = max - (inputVal - min);
    onChange(reversedVal);
  };

  // هندل کلیک روی ریل با مگنت
  const handleRailClick = (e) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickPercent = Math.max(
        0,
        Math.min(100, (clickX / rect.width) * 100)
      );
      const newValue = min + (clickPercent / 100) * (max - min);
      const steppedValue = Math.round(newValue / step) * step;
      const clampedValue = Math.min(Math.max(steppedValue, min), max);

      // پیدا کردن نزدیک‌ترین نقطه مگنت
      const nearestPoint = findNearestMagnetPoint(clampedValue);
      const distance = Math.abs(clampedValue - nearestPoint.value);

      // اگر فاصله کمتر از 8% از کل رنج باشد، به نقطه مگنت جذب شو
      const threshold = (max - min) * 0.08;
      if (distance < threshold) {
        onChange(nearestPoint.value);
      } else {
        onChange(clampedValue);
      }
    }
  };

  // پیدا کردن نزدیک‌ترین نقطه مگنت
  const findNearestMagnetPoint = (currentValue) => {
    let nearestPoint = magnetPoints[0];
    let minDistance = Math.abs(currentValue - nearestPoint.value);

    for (const point of magnetPoints) {
      const distance = Math.abs(currentValue - point.value);
      if (distance < minDistance) {
        minDistance = distance;
        nearestPoint = point;
      }
    }

    return nearestPoint;
  };

  // هندل کشیدن دایره با مگنت
  const handleDrag = (event, info) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const dragX = info.point.x - rect.left;
      const dragPercent = Math.max(
        0,
        Math.min(100, (dragX / rect.width) * 100)
      );
      const newValue = min + (dragPercent / 100) * (max - min);
      const steppedValue = Math.round(newValue / step) * step;
      const clampedValue = Math.min(Math.max(steppedValue, min), max);

      // اگر در حال کشیدن نیستیم، مگنت اعمال نکن
      if (!isDragging) {
        onChange(clampedValue);
        return;
      }

      // پیدا کردن نزدیک‌ترین نقطه مگنت
      const nearestPoint = findNearestMagnetPoint(clampedValue);
      const distance = Math.abs(clampedValue - nearestPoint.value);

      // اگر فاصله کمتر از 5% از کل رنج باشد، به نقطه مگنت جذب شو
      const threshold = (max - min) * 0.05;
      if (distance < threshold) {
        onChange(nearestPoint.value);
      } else {
        onChange(clampedValue);
      }
    }
  };

  return (
    <div
      ref={sliderRef}
      className="relative w-[80%] h-6 flex items-center "
      onClick={handleRailClick}
    >
      {/* ریل خاکستری */}
      <div className="absolute top-1/2 left-0 w-full h-[6px]  bg-gray-200 rounded-full -translate-y-1/2 cursor-pointer" />

      {/* نقاط مگنت (دایره‌های کمرنگ) */}
      {magnetPoints.map((point, index) => (
        <div
          key={index}
          className={`absolute top-1/2 w-2 h-2 opacity-50  blur-[0.2px]  bg-radial from-sky-100 to-[#00AEEF]  bg-opacity-30 rounded-full pointer-events-none  ${
            index === 11 ? "hidden" : ""
          } ${index === 0 ? "hidden" : ""}`}
          style={{
            left: `${point.percent}%`,
            transform: "translateX(-50%) translateY(-50%)",
          }}
        />
      ))}

      {/* ریل آبی متحرک (از چپ پر میشه) */}
      <motion.div
        className="absolute top-1/2 left-0 h-[6px] bg-[#00AEEF] rounded-full -translate-y-1/2"
        initial={{ width: 0 }}
        animate={{ width: `${percent}%` }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      />

      {/* اینپوت اصلی (نامرئی) */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={max - (value - min)} // برعکس برای دسته
        onChange={handleChange}
        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
      />

      {/* دایره دسته متحرک (قابل کشیدن و کلیک) */}
      <motion.div
        className="absolute hover:scale-120  top-1/2 w-5 h-5 bg-[#00AEEF] rounded-full border-2 border-white shadow -translate-y-1/2 cursor-grab active:cursor-grabbing z-10"
        initial={false}
        animate={{
          left: `${percent}%`,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        dragElastic={0}
        onDrag={handleDrag}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        whileDrag={{ scale: 1.1 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          transform: "translateX(-50%)",
        }}
      />
    </div>
  );
}
