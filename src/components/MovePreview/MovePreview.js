import React from "react";
import "./MovePreview.css";

const MovePreview = props => {
  const move = props.move;

  return (
    <li className="MovePreview">
      <div>
        <h3>To: {move.to}</h3>
        <div>Amount: {move.amount}</div>
        <div>At: {move.at}</div>
      </div>
    </li>
  );
};

export default MovePreview;
