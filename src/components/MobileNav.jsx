// MobileNav.jsx
import React from "react";

const MobileNav = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="px-4 py-2 flex justify-between items-center opacity-100">
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
    </div>
  );
};

export default MobileNav;
