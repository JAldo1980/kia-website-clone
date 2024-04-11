import React from "react";

const MidFooter = () => {
  return (
    <div className="flex flex-col bg-black text-white border-b border-white border-opacity-20 p-6 lg:flex lg:flex-row lg:justify-between">
      <div className="bg-black flex gap-2 pt-4">
        <img
          src="https://www.kia.com/etc.clientlibs/settings/wcm/designs/kia-uk/clientlib/resources/rbr/icons/sns/facebook.svg"
          alt="facebook-icon"
          className="cursor-pointer"
        />
        <img
          src="https://www.kia.com/etc.clientlibs/settings/wcm/designs/kia-uk/clientlib/resources/rbr/icons/sns/twitter.svg"
          alt="twitter-icon"
          className="cursor-pointer"
        />
        <img
          src="https://www.kia.com/etc.clientlibs/settings/wcm/designs/kia-uk/clientlib/resources/rbr/icons/sns/instagram.svg"
          alt="instagram-icon"
          className="cursor-pointer"
        />
        <img
          src="https://www.kia.com/etc.clientlibs/settings/wcm/designs/kia-uk/clientlib/resources/rbr/icons/sns/youtube.svg"
          alt="youtube-icon"
          className="cursor-pointer"
        />
        <img
          src="https://www.kia.com/etc.clientlibs/settings/wcm/designs/kia-uk/clientlib/resources/rbr/icons/sns/linkedin.svg"
          alt="linkedin-icon"
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-wrap gap-6 pt-4 text-sm w-2/5">
        <p className="cursor-pointer hover:underline">
          Sign Up to the Kia Experience
        </p>
        <p className="cursor-pointer hover:underline">Contact Us</p>
        <p className="cursor-pointer hover:underline">Privacy</p>
        <p className="cursor-pointer hover:underline">
          Modern Slavery Statement
        </p>
        <p className="cursor-pointer hover:underline">Customer Services</p>
        <p className="cursor-pointer hover:underline">FAQs</p>
        <p className="cursor-pointer hover:underline">Terms of Use</p>
        <p className="cursor-pointer hover:underline">Cookies</p>
        <p className="cursor-pointer hover:underline">Tax Strategy</p>
        <p className="cursor-pointer hover:underline">Accessibility</p>
        <p className="cursor-pointer hover:underline">Kia Connect</p>
        <p className="cursor-pointer hover:underline">Legal Documents</p>
      </div>
    </div>
  );
};

export default MidFooter;
