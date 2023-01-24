import React from "react";

const Square = (props) => {
  const classes = props.className
    ? `${props.className} squarestyle`
    : "squarestyle";
  return (
    <div className={classes}>
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    </div>
  );
};

export default Square;
