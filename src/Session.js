import React from "react";

function Session({ sessionDecrement, sessionLength, sessionIncrement }) {
  return (
    <div className="session">
      <h2 id="session-label">Session Length</h2>
      <button id="session-decrement" onClick={sessionDecrement}>
        -
      </button>
      <div id="session-length">{sessionLength}</div>
      <button id="session-increment" onClick={sessionIncrement}>
        +
      </button>
    </div>
  );
}

export default Session;
