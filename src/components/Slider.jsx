import React, { useState, useEffect } from "react";
import SliderData from "./SliderData";
import MobileNav from "./MobileNav";
import DeskTopNav from "./DeskTopNav";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % SliderData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getImageSource = () => {
    if (windowWidth >= 767) {
      return SliderData[currentSlide].desktopImage;
    } else {
      return SliderData[currentSlide].mobileImage;
    }
  };

  return (
    <div className="relative">
      <MobileNav />
      {/* Conditional rendering for DeskTopNav */}
      {windowWidth >= 1024 && <DeskTopNav />}
      <div className="relative">
        <img
          src={getImageSource()}
          alt="kia car image"
          key={SliderData[currentSlide].id}
        />
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center w-1/2">
          <h2 className="text-white text-3xl font-bold">
            {SliderData[currentSlide].headline}
          </h2>
          {SliderData[currentSlide].text && (
            <p className="mt-4 text-white">{SliderData[currentSlide].text}</p>
          )}
          <button className="mt-8 bg-white text-black py-2 px-4 w-5/6">
            {SliderData[currentSlide].buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
