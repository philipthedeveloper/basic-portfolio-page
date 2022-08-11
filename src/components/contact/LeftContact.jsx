import React from "react";

function LeftContact() {
  return (
    <>
      <section className="c-left">
        <h2 className="c-title">Let's discuss your project</h2>
        <div className="c-info">
          <span className="c-info-item">
            <i className="fa fa-phone c-icon" aria-hidden="true"></i>
            <a href="tel:+2348153026203"> +234 81 530 262 03</a>
          </span>
          <span className="c-info-item">
            <i className="fa fa-envelope-o c-icon" aria-hidden="true"></i>
            <a href="mailto:philipowolabi79@gmail.com">
              philipowolabi79@gmail.com
            </a>
          </span>
          <span className="c-info-item">
            <i className="fa fa-map-marker c-icon" aria-hidden="true"></i>{" "}
            <address>
              First Technical University <br />
              Kilometer 10, Lagos-Ibadan Express Way
            </address>
          </span>
        </div>
      </section>
    </>
  );
}

export default LeftContact;
