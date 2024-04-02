// App.js
import React from "react";
import MobileNav from "./components/MobileNav";
import Slider from "./components/Slider";
import "./styles/style.css";

function App() {
  return (
    <div className="relative">
      <MobileNav />
      <Slider />
    </div>
  );
}

export default App;
