import React from "react";
import "../App.scss";
import Buttons from "./Buttons";

const GameBoard = (props) => {
  const renderButtons = (i) => {
    return (
      <Buttons value={props.buttons[i]} onClick={() => props.onClick(i)} />
    );
  };

  return (
    <div id="boardContainer">
      {renderButtons(0)}
      {renderButtons(1)}
      {renderButtons(2)}
      {renderButtons(3)}
      {renderButtons(4)}
      {renderButtons(5)}
      {renderButtons(6)}
      {renderButtons(7)}
      {renderButtons(8)}
    </div>
  );
};

export default GameBoard;
