import React from "react";
import "./about.css";
import LeftAbout from "./LeftAbout";
import RightAbout from "./RightAbout";

function Intro(props) {
  return (
    <main className="about">
      <LeftAbout />
      <RightAbout />
    </main>
  );
}

export default Intro;
