import React from "react";

const Square = (props) => {
  const classes = props.className
    ? `${props.className} boardStyle`
    : "boardStyle";
  return (
    <div className={classes}>
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    </div>
  );
};

export default Square;
