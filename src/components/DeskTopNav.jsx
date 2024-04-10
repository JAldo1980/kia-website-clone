import React, { useState } from "react";

const DeskTopNav = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="px-4 py-4 flex justify-between text-white font-bold items-center z-20 opacity-100 absolute w-full border-b border-opacity-50 hover:bg-white hover:text-black"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {/*  */}
      <div className="flex flex-2 cursor-pointer items-center justify-between gap-6 mr-40">
        <p className="hover:underline cursor-pointer">New Cars</p>
        <p className="hover:underline cursor-pointer">Used Cars</p>
        <p className="hover:underline cursor-pointer">Electric Cars</p>
      </div>
      {/*  */}
      <div className="flex justify-center items-center">
        {" "}
        {/* Centering wrapper */}
        <img
          className="h-6 cursor-pointer"
          src={
            isHovered
              ? "https://www.kia.com/etc.clientlibs/settings/wcm/designs/kia-uk/clientlib/resources/rbr/logo_kia_black-rbr.png"
              : "https://www.kia.com/etc.clientlibs/settings/wcm/designs/kia-uk/clientlib/resources/rbr/logo_kia_white-rbr.png"
          }
          alt="kia-logo"
        />
      </div>
      {/*  */}
      <div className="flex justify-between items-center gap-6 ">
        <p className="hover:underline cursor-pointer">Buying A Kia</p>
        <p className="hover:underline cursor-pointer">Owners</p>
        <p className="hover:underline cursor-pointer">Business</p>
        <p className="hover:underline cursor-pointer">Innovation</p>
        <div className="flex bg-black p-2 rounded-full text-white gap-3 items-center">
          <img
            src="https://www.kia.com/etc.clientlibs/settings/wcm/designs/kia-uk/clientlib/resources/rbr/icons/icon_config_white.svg"
            alt="cog"
            className="h-5"
          />
          <p className="hover:underline cursor-pointer px-2">Build Your KIA</p>
        </div>
      </div>
    </div>
  );
};

export default DeskTopNav;
