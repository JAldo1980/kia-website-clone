import React, { useState, useEffect } from "react";

const MobileNav = () => {
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    function handleResize() {
      setShowComponent(window.innerWidth < 1412);
    }

    window.addEventListener("resize", handleResize);

    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!showComponent) return null;

  return (
    <div className="px-4 py-4 flex justify-between items-center z-20 opacity-100 absolute w-full border-b border-opacity-50 ">
      <div className="text-2xl text-white cursor-pointer">☰</div>
      <img
        className="h-6 cursor-pointer"
        src="https://www.kia.com/etc.clientlibs/settings/wcm/designs/kia-uk/clientlib/resources/rbr/logo_kia_white-rbr.png"
        alt="kia-logo"
      />
      <img
        className="h-4 cursor-pointer"
        src="https://www.kia.com/etc.clientlibs/settings/wcm/designs/kia-uk/clientlib/resources/rbr/icons/header/icon_search_white.svg"
        alt="spy glass icon"
      />
    </div>
  );
};

export default MobileNav;
