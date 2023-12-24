import { useMemo, useState } from "react";
import { galleryData } from "../../utils/data";

export const Carousel = () => {
  const Dot = ({ active }) => (
    <span
      className={`inline-block w-4 h-4 mx-2 rounded-full ${
        active ? "bg-[#111727]" : "bg-gray-300"
      }`}
    ></span>
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? galleryData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const lastSlide = currentIndex === galleryData.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const displayDots = useMemo(() => galleryData.slice(0, 5), [galleryData]);

  return (
    <div className="max-w-[1400px] lg:w-[65%] h-96 lg:h-[600px] w-full m-auto py-16 px-4 relative">
      <div
        style={{ backgroundImage: `url(${galleryData[currentIndex].img})` }}
        className="w-full h-full  bg-center bg-cover duration-500"
      >
        <button className="absolute top-1/2 left-8" onClick={prevSlide}>
          <svg
            className="bg-white opacity-50 hover:opacity-100 rounded-full transform -scale-x-100 lg:w-10 lg:h-10"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M9 18L15 12L9 6" stroke="black" />
          </svg>
        </button>
        <button className="absolute top-1/2 right-8" onClick={nextSlide}>
          <svg
            className="bg-white opacity-50 hover:opacity-100 rounded-full lg:w-10 lg:h-10"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M9 18L15 12L9 6" stroke="black" />
          </svg>
        </button>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {displayDots.map((_, index) => (
          <Dot key={index} active={index === currentIndex} />
        ))}
      </div>
    </div>
  );
};
