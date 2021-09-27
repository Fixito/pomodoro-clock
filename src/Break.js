import React from "react";
import "./Break.css";

function Break({ breakDecrement, breakLength, breakIncrement }) {
  return (
    <div className="break">
      <h2 id="break-label">Break Length</h2>
      <div className="break__buttons">
        <span id="break-decrement" onClick={breakDecrement}>
          <i className="fas fa-minus"></i>
        </span>
        <div id="break-length">{breakLength}</div>
        <span id="break-increment" onClick={breakIncrement}>
          <i className="fas fa-plus"></i>
        </span>
      </div>
    </div>
  );
}

export default Break;
