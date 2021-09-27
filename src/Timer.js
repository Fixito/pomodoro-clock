import React from "react";
import "./Timer.css";

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
      </div>
      <div className="timer__buttons">
        <span id="start_stop" onClick={handlePlayPause}>
          {isRunning ? (
            <i className="fas fa-pause"></i>
          ) : (
            <i className="fas fa-play"></i>
          )}
        </span>
        <span id="reset" onClick={handleReset}>
          <i className="fas fa-sync-alt"></i>
        </span>
      </div>
    </>
  );
}

export default Timer;
