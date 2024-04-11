import React, { useState, useEffect } from "react";

const TopBar = () => {
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
    <>
      <div className="hidden lg:flex bg-black text-gray-400 justify-end align-center gap-10 px-4 py-2 uppercase text-sm font-bold">
        <div className="cursor-pointer hover:underline">Privacy Settings</div>
        <div className="cursor-pointer hover:underline">About KIA</div>
        <div className="cursor-pointer hover:underline">Find A Dealer</div>
        <div className="cursor-pointer hover:underline">Book A Test Drive</div>
        <div className="cursor-pointer hover:underline">Brochure</div>
        <div className="cursor-pointer hover:underline">Search</div>
        <div className="cursor-pointer flex gap-4 items-center hover:underline">
          <img
            src="https://www.kia.com/content/dam/kwcms/kme/uk/en/assets/static/img_flag_gb.png"
            alt="union-flag"
            className="cursor-pointer rounded-full h-4"
          />
          <div className="cursor-pointer hover:underline">Change Country</div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
