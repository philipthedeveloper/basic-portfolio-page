import React from "react";
import "./toggle.css";
import { ThemeContextConsumer } from "../../context";

function Toggle() {
  return (
    <ThemeContextConsumer>
      {({ state, dispatch }) => {
        let tButton = "t-button ";

        if (state.darkmode) {
          tButton += "dark";
        }

        return (
          <div className="t" onClick={() => dispatch({ type: "TOGGLE" })}>
            <img src="./img/sunB.png" alt="" className="t-icon" />
            <img src="./img/moonB.png" alt="" className="t-icon" />
            <div className={tButton}></div>
          </div>
        );
      }}
    </ThemeContextConsumer>
  );
}

export default Toggle;
