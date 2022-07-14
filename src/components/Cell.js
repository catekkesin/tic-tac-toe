import React from "react";

const Cell = (props) => {
  return (
    <button
      onClick={() => {
        props.handleClick(props.cell);
      }}
      className={`cell ${
        props.cell.symbol === "X"
          ? "cell-x"
          : props.cell.symbol == "O"
          ? "cell-y"
          : ""
      }`}
    >
      <strong>{props.cell.symbol !== "" ? props.cell.symbol : "empty"}</strong>
    </button>
  );
};

export default Cell;
