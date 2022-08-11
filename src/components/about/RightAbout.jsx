import React from "react";

function RightAbout() {
  return (
    <section className="right-about">
      <h2 className="a-title">About Me</h2>
      <p className="a-sub">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
        veritatis! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <p className="a-desc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
        tenetur dolorem ipsum debitis? Distinctio expedita possimus magni,
        molestias iure voluptates corporis a repellendus eligendi dolore unde
        animi voluptatibus necessitatibus saepe enim harum quibusdam pariatur
        illo dignissimos voluptas praesentium. Dolore, possimus!
      </p>
      <section className="a-award">
        <img src="./img/award.jpg" alt="" width={120} className="a-img" />
        <div className="a-award-text">
          <h4 className="a-award-title">International Design Award 2022</h4>
          <p>
            Ipsum dolor sit amet, consectetur adipisicing elit. Iusto obcaecati
            quod accusantium voluptatibus quidem ipsa.
          </p>
        </div>
      </section>
    </section>
  );
}

export default RightAbout;
