import React from "react";
import { useMediaQuery } from "react-responsive";
import DropDownData from "./DropDownData";

const LargeScreenDropDown = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 }); // LG breakpoint in Tailwind CSS

  return isLargeScreen ? (
    <div className="bg-black text-white p-4">
      {/* Render each category as a column */}
      <div className="grid lg:grid-cols-8 gap-6">
        {DropDownData.map((category, index) => (
          <div key={index}>
            <h3 className="text-lg font-bold mb-2 hover:underline">
              {category.title}
            </h3>
            <ul>
              {category.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    className="cursor-pointer pt-2 block hover:underline"
                    href={link.url}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default LargeScreenDropDown;
