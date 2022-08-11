import React from "react";
import "./intro.css";
import LeftIntro from "./LeftIntro";
import RightIntro from "./RightIntro";

function Intro(props) {
  return (
    <section className="intro">
      <LeftIntro />
      <RightIntro />
    </section>
  );
}

export default Intro;
