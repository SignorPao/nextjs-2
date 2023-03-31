import { useState } from "react";
import Image from "next/image";

import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

import { sliderData } from "@/data/sliderData";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto text-center px-4 pt-12 pb-6">
      <h1 className="title">
        Gallery
      </h1>
      <div className="relative overflow-hidden w-full h-[500px] lg:h-[600px] flex justify-center p-4">
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className={
              index === current
                ? "opacity-100 ease-in duration-1000"
                : "opacity-0"
            }
          >
            <FaArrowCircleLeft
              onClick={prevSlide}
              className="absolute top-[50%] left-[30px] text-yellow-300/70 hover:text-yellow-300 ease-in duration-150 cursor-pointer select-none z-[2]"
              size={50}
            />
            {index === current && (
              <Image
                src={slide.image}
                alt="slider image"
                fill
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            )}
            <FaArrowCircleRight
              onClick={nextSlide}
              className="absolute top-[50%] right-[30px] text-yellow-300/70 hover:text-yellow-300 ease-in duration-150 cursor-pointer select-none z-[2]"
              size={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
