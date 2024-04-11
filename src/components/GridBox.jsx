import React, { useState, useEffect } from "react";
import Button from "./Button";

const GridBox = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [useLargeImage, setUseLargeImage] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Adjust the threshold as needed
      setUseLargeImage(window.innerWidth >= 1024); // Assuming lg breakpoint is 1024px, adjust as needed
    };

    handleResize(); // Check on component mount
    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener
    };
  }, []);

  return (
    <div className="grid text-center lg:flex lg:justify-center lg:text-center">
      {/* Conditionally render image based on screen size and breakpoint */}
      <div
        className={`relative ${
          isSmallScreen
            ? "row-span-full lg:col-span-1"
            : useLargeImage
            ? "row-span-1 lg:col-span-2"
            : "row-span-1 lg:col-span-3"
        }`}
      >
        <img
          src={
            useLargeImage
              ? "/DiscoverEV_FeatureBlock_680x262.jpg"
              : "/DiscoverEV_HeroImage_1920x364.jpg"
          }
          alt="discover-ev-banner"
          className="z-10 "
        />
        <div className="absolute bottom-5 left-0 right-0 text-center">
          <div className="text-white">
            <h3 className="font-bold text-sm sm:text-xl">
              DISCOVER EV WITH KIA
            </h3>
            <Button
              label="DISCOVER MORE"
              type="button"
              className="mt-2 bg-white p-2 text-black font-bold px-4 hover:underline"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {/* BOX 2 */}
        <div className="relative bg-black">
          <img
            src="/SalesBanner_480x262_NewCars.jpg"
            alt="current-offers-banner"
            className="opacity-60"
          />
          <div className="absolute bottom-5 left-0 right-0 md:bottom-1 lg:bottom-5">
            <div className="text-white p-4">
              <h3 className="font-bold text-sm sm:text-xl">CURRENT OFFERS</h3>
            </div>
          </div>
        </div>
        {/* BOX 3 */}
        <div className="relative">
          <img
            src="/SalesBanner_480x262_NewCars.jpg"
            alt="current-offers-banner"
          />
          <div className="absolute bottom-5 left-0 right-0 md:bottom-1 lg:bottom-5">
            <div className="text-white p-4">
              <h3 className="font-bold text-sm sm:text-xl">
                FINANCE CALCULATOR
              </h3>
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
          <div className="absolute bottom-5 left-0 right-0 md:bottom-1 lg:bottom-5">
            <div className="text-white p-4">
              <h3 className="font-bold text-sm sm:text-xl">
                BOOK A TEST DRIVE
              </h3>
            </div>
          </div>
        </div>
        {/* BOX 5 */}
        <div className="relative">
          <img src="/7yearwarranty_480x262.jpg" alt="7-year-warranty-banner" />
          <div className="absolute bottom-0 left-0 right-0"></div>
        </div>
      </div>
    </div>
  );
};

export default GridBox;
