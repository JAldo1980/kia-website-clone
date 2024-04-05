import React from "react";

const LowerFooter = () => {
  return (
    <>
      <div className="px-4 py-4 bg-black flex items-center gap-1">
        <img
          src="https://www.kia.com/etc.clientlibs/settings/wcm/designs/kia-uk/clientlib/resources/rbr/icons/icon-home-light.svg"
          alt="home-icon"
          className="h-4"
        />
        <p className="text-white">&gt; UK &gt;</p>
        <p className="text-gray-300">EN</p>
      </div>
      <div className="px-4 py-4 bg-black flex gap-2 items-center">
        <img
          src="https://www.kia.com/content/dam/kwcms/kme/uk/en/assets/static/img_flag_gb.png"
          alt="Union flag image"
          className="w-6 h-4"
        />
        <p className="text-white font-bold">UNITED KINGDOM</p>
        <p>&copy; KIA UK 2024</p>
      </div>
    </>
  );
};

export default LowerFooter;
