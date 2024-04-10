import React from "react";

const TopBar = () => {
  return (
    <>
      <div className="bg-black text-white flex justify-end align-center gap-12">
        <div>Privacy Settings</div>
        <div>About KIA</div>
        <div>Find A Dealer</div>
        <div>Book A Test Drive</div>
        <div>Brochure</div>
        <div>Search</div>
        <div className="flex">
          <img
            src="https://www.kia.com/content/dam/kwcms/kme/uk/en/assets/static/img_flag_gb.png"
            alt="union-flag"
            className="rounded-full"
          />
          <div>Change Country</div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
