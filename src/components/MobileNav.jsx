import React from "react";

const MobileNav = () => {
  return (
    <div className="px-4 py-4 flex justify-between items-center z-20 opacity-100 absolute w-full border-b border-opacity-50">
      <div className="text-2xl text-white cursor-pointer">☰</div>
      <img
        className="h-4"
        src="https://www.kia.com/etc.clientlibs/settings/wcm/designs/kia-uk/clientlib/resources/rbr/logo_kia_white-rbr.png"
        alt="kia-logo"
      />
      <img
        className="h-4"
        src="https://www.kia.com/etc.clientlibs/settings/wcm/designs/kia-uk/clientlib/resources/rbr/icons/header/icon_search_white.svg"
        alt="spy glass icon"
      />
    </div>
  );
};

export default MobileNav;
