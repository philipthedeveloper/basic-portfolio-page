import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import ThemeProvider from "./context";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.querySelector("#root")
);
