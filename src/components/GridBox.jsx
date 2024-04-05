// GridBox.jsx
import React from "react";
import Button from "./Button";

const GridBox = () => {
  return (
    <div className="grid">
      {/* BOX 1 */}
      <div className="relative row-span-full z-0">
        <img
          src="/DiscoverEV_HeroImage_1920x364.jpg"
          alt="discover-ev-banner"
          className="z-10"
        />
        <div className="absolute bottom-5 left-0 right-0 text-center">
          <div className=" text-white">
            <h3 className="text-xl font-bold">DISCOVER EV WITH KIA</h3>
            <Button
              label="DISCOVER MORE"
              type="button"
              className="mt-2 bg-white p-2 text-black font-bold px-4"
            />
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-2">
        {/* BOX 2 */}
        <div className="relative bg-black">
          <img
            src="/SalesBanner_480x262_NewCars.jpg"
            alt="current-offers-banner"
            className="opacity-60"
          />
          <div className="absolute bottom-10 left-0 right-0 text-center">
            <div className="text-white p-4">
              <h3 className="text-xl font-bold">Current Offers</h3>
            </div>
          </div>
        </div>
        {/* BOX 3 */}
        <div className="relative">
          <img
            src="/SalesBanner_480x262_NewCars.jpg"
            alt="current-offers-banner"
          />
          <div className="absolute bottom-10 left-0 right-0 text-center">
            <div className=" text-white p-4">
              <h3 className="text-xl font-bold">FINANCE CALCULATOR</h3>
            </div>
          </div>
        </div>
        {/* BOX 4 */}
        <div className="relative bg-black z-0">
          <img
            src="/SalesBanner_480x262_NewCars.jpg"
            alt="current-offers-banner"
            className="opacity-60 z-10"
          />
          <div className="absolute bottom-10 left-0 right-0 text-center">
            <div className=" text-white p-4">
              <h3 className="text-xl font-bold">BOOK A TEST DRIVE</h3>
            </div>
          </div>
        </div>
        {/* BOX 5 */}
        <div className="relative">
          <img src="/7yearwarranty_480x262.png" alt="7-year-warranty-banner" />
          <div className="absolute bottom-0 left-0 right-0 text-center"></div>
        </div>
      </div>
    </div>
  );
};

export default GridBox;
