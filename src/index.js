import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import "./style/index.css";
import store from "../src/store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
