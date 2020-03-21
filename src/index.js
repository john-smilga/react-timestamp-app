import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StampProvider } from "./context";
ReactDOM.render(
  <StampProvider>
    <App />
  </StampProvider>,

  document.getElementById("root")
);
