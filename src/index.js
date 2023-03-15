import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import TicTacToeGame from "./components/TicTacToeGame.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TicTacToeGame />
  </React.StrictMode>
);
