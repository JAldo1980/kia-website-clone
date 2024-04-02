// Slider.jsx
import React from "react";
import Button from "./Button";
import SliderData from "./SliderData";

const Slider = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-0">
      {SliderData.map((data) => (
        <div key={data.id} className="relative">
          <img src={data.mobileImage} alt="kia slider image one" />
          <div className="absolute bottom-20 left-0 w-full flex flex-col items-center text-center ">
            {/* Container with absolute positioning */}
            <h2 className="text-white text-3xl text-bolder ">
              {data.headline}
            </h2>
            <p className="text-white">{data.text}</p>
            <Button
              label={data.buttonText}
              onClick={() => window.open(data.link, "_blank")}
              type="button"
              className="w-1/2 bg-white text-black py-2 px-4 mt-2"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
