import React from "react";

const MidFooter = () => {
  return (
    <div className="flex flex-col bg-black text-white p-4">
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
      <div className="flex flex-wrap gap-2 pt-4 text-sm">
        <p className="cursor-pointer">Sign Up to the Kia Experience</p>
        <p className="cursor-pointer">Contact Us</p>
        <p className="cursor-pointer">Privacy</p>
        <p className="cursor-pointer">Modern Slavery Statement</p>
        <p className="cursor-pointer">Customer Services</p>
        <p className="cursor-pointer">FAQs</p>
        <p className="cursor-pointer">Terms of Use</p>
        <p className="cursor-pointer">Cookies</p>
        <p className="cursor-pointer">Tax Strategy</p>
        <p className="cursor-pointer">Accessibility</p>
        <p className="cursor-pointer">Kia Connect</p>
        <p className="cursor-pointer">Legal Documents</p>
      </div>
    </div>
  );
};

export default MidFooter;
