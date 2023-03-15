import React from "react";
import "../App.scss";

const Buttons = (props) => {
  return (
    <button className="buttons" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Buttons;
