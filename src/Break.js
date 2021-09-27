import React from "react";

function Break({ breakDecrement, breakLength, breakIncrement }) {
  return (
    <div className="break">
      <h2 id="break-label">Break Length</h2>
      <button id="break-decrement" onClick={breakDecrement}>
        -
      </button>
      <div id="break-length">{breakLength}</div>
      <button id="break-increment" onClick={breakIncrement}>
        +
      </button>
    </div>
  );
}

export default Break;
