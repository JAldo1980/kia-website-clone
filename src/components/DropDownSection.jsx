import React, { useState } from "react";

const DropDownSection = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // if screen is sm and or md (tailwind) then, execute this code:

  return (
    <div className="bg-black text-white p-4 border-b border-white border-opacity-20 lg:hidden ">
      <div className="flex justify-between mb-2 font-bold uppercase">
        {" "}
        <h2>{title}</h2>
        <div onClick={toggleDropdown} className="cursor-pointer">
          v
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col">
          {links.map((link, index) => (
            <a className="cursor-pointer pt-2" key={index} href={link.url}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );

  // else if screen is lg (tailwind) just show DropDownData as columns
};

export default DropDownSection;
