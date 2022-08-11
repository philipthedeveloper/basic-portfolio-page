import React from "react";

const LeftIntro = (props) => {
  return (
    <section className="left-intro">
      <section className="left-intro-wrapper">
        <h2 className="i-intro">Hello, my name is</h2>
        <h2 className="i-name">Philip Maxwell</h2>
        <section className="i-title">
          <ul className="i-title-wrapper">
            <li className="i-title-items">Web Developer</li>
            <li className="i-title-items">UI/UX Designer</li>
            <li className="i-title-items">Photographer</li>
            <li className="i-title-items">Writer</li>
            <li className="i-title-items">Content Creator</li>
          </ul>
        </section>
        <p className="i-description">
          My name is Owolabi Philip, I am a nigerian, I am a student of the
          first tecnical university Ibadan. I have great passion for web / app
          or software development. I love harnessing the power of programming to
          control my computer, instruct the browser anyway I like. This is all I
          have, all I need, all I ever choose.
        </p>
        {/* <svg
          width={75}
          height={75}
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          xmlns="https://www.w3.org/2000/svg"
        >
          <g>
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 25"
              stroke-width={3}
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width={3}
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width={3}
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width={2.9895}
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.218 1.5 34.5 1.5C48.5"
                stroke-width={3}
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg> */}
      </section>
    </section>
  );
};

export default LeftIntro;
