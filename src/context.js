import { useReducer, createContext } from "react";

export const ThemeContext = createContext();
export const ThemeContextConsumer = ThemeContext.Consumer;

const INITIAL_STATE = { darkmode: false };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { darkmode: !state.darkmode };
    default:
      return state;
  }
};

export default function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
