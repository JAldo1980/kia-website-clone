import React from "react";
import TopBar from "./components/TopBar";
import Slider from "./components/Slider";
import GridBox from "./components/GridBox";
import MainFooter from "./components/MainFooter";
import MidFooter from "./components/MidFooter";
import LowerFooter from "./components/LowerFooter";
import DropDownSection from "./components/DropDownSection";
import DropDownData from "./components/DropDownData";
import LargeScreenDropDown from "./components/LargeScreenDropDown";

import "./styles/style.css";

function App() {
  return (
    <div>
      <TopBar />
      <Slider />
      <GridBox />
      <MainFooter />
      {DropDownData.map((section, index) => (
        <DropDownSection
          key={index}
          title={section.title}
          links={section.links}
          className="p-4"
        />
      ))}
      <LargeScreenDropDown />
      <MidFooter />
      <LowerFooter />
    </div>
  );
}

export default App;
