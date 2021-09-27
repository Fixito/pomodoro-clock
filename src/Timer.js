import React from "react";

function Timer({
  currentTimer,
  clock,
  handlePlayPause,
  handleReset,
  isRunning,
}) {
  return (
    <>
      <div className="timer">
        <h2 id="timer-label">{currentTimer}</h2>

        <div id="time-left" style={{ fontSize: "100px" }}>
          <span>{clock}</span>
        </div>

        <button id="start_stop" onClick={handlePlayPause}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button id="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Timer;
