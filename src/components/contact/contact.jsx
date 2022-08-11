import React from "react";
import LeftContact from "./LeftContact";
import RightContact from "./RightContact";
import "./contact.css";

function Contact() {
  return (
    <>
      <section className="contact">
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <LeftContact />
          <RightContact />
        </div>
      </section>
    </>
  );
}

export default Contact;
