import React, { useContext, useEffect } from "react";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import ProductList from "./components/product/ProductList";
import Contact from "./components/contact/contact";
import Toggle from "./components/toggle/toggle";
import { ThemeContext } from "./context";

function App(props) {
  const theme = useContext(ThemeContext);
  let body = document.body;

  useEffect(() => {
    switch (theme.state.darkmode) {
      case true:
        body.style.backgroundColor = "#222";
        body.style.color = "white";
        break;
      case false:
        body.style.backgroundColor = "#fff";
        body.style.color = null;
    }
  });

  return (
    <>
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </>
  );
}

export default App;
