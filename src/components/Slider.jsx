import React, { useState, useEffect } from "react";
import SliderData from "./SliderData";
import MobileNav from "./MobileNav";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % SliderData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <MobileNav />
      <div className="relative">
        <img
          src={SliderData[currentSlide].mobileImage}
          alt="kia car image"
          key={SliderData[currentSlide].id}
        />
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
          <h2 className="text-white text-3xl">
            {SliderData[currentSlide].headline}
          </h2>
          {SliderData[currentSlide].text && (
            <p className="text-white">{SliderData[currentSlide].text}</p>
          )}
          <button className="bg-white text-black py-2 px-4">
            {SliderData[currentSlide].buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
