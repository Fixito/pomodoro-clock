import React from "react";
import "./Session.css";

function Session({ sessionDecrement, sessionLength, sessionIncrement }) {
  return (
    <div className="session">
      <h2 id="session-label">Session Length</h2>
      <div className="session__buttons">
        <span id="session-decrement" onClick={sessionDecrement}>
          <i className="fas fa-minus"></i>
        </span>
        <div id="session-length">{sessionLength}</div>
        <span id="session-increment" onClick={sessionIncrement}>
          <i className="fas fa-plus"></i>
        </span>
      </div>
    </div>
  );
}

export default Session;
