import React, { useState, useEffect } from "react";

const DeskTopNav = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    function handleResize() {
      setShowComponent(window.innerWidth >= 1412);
    }

    window.addEventListener("resize", handleResize);

    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!showComponent) return null;

  return (
    <div
      className="px-4 py-4 flex justify-between text-white font-bold items-center z-20 opacity-100 absolute w-full border-b border-opacity-50 text-sm hover:bg-white hover:text-black duration-200"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {/*  */}
      <div className="flex flex-1 cursor-pointer items-center justify-start gap-2">
        <p className="hover:underline cursor-pointer">New Cars</p>
        <p className="hover:underline cursor-pointer">Used Cars</p>
        <p className="hover:underline cursor-pointer">Electric Cars</p>
      </div>
      {/*  */}
      <div className="flex flex-1 justify-center items-center">
        <img
          className="h-6 cursor-pointer"
          src={
            isHovered
              ? "https://www.kia.com/etc.clientlibs/settings/wcm/designs/kia-uk/clientlib/resources/rbr/logo_kia_black-rbr.png"
              : "https://www.kia.com/etc.clientlibs/settings/wcm/designs/kia-uk/clientlib/resources/rbr/logo_kia_white-rbr.png"
          }
          alt="kia-logo"
          style={{ padding: "0 10px" }} // Added padding here
        />
      </div>
      {/*  */}
      <div className="flex flex-1 justify-between items-center gap-2 ">
        <p className="hover:underline cursor-pointer">Buying A Kia</p>
        <p className="hover:underline cursor-pointer">Owners</p>
        <p className="hover:underline cursor-pointer">Business</p>
        <p className="hover:underline cursor-pointer">Innovation</p>
        <div className="flex items-center">
          <div className="flex bg-black p-2 rounded-full text-white gap-1 items-center">
            <img
              src="https://www.kia.com/etc.clientlibs/settings/wcm/designs/kia-uk/clientlib/resources/rbr/icons/icon_config_white.svg"
              alt="cog"
              className="h-5"
            />
            <p className="hover:underline cursor-pointer px-2">
              Build Your KIA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeskTopNav;
