import { useTimer } from "react-timer-hook";

export default function MyTimer({ expiryTimestamp, handleReset }) {
  const { minutes, seconds, isRunning, start, pause, restart } = useTimer({
    autoStart: false,
    expiryTimestamp,
    onExpire: () => console.log("ENDGMAE"),
  });

  const reset = () => {
    const time = new Date();
    handleReset();
    time.setSeconds(time.getSeconds() + 60 * minutes);
    restart(time, false);
  };

  return (
    <>
      <div className="timer">
        <h2 id="timer-label">Session</h2>
        <div id="time-left"></div>
        <div style={{ fontSize: "100px" }}>
          <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
          <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
        </div>
        <p>{isRunning ? "Running" : "Not running"}</p>
        {isRunning ? (
          <button onClick={pause}>Pause</button>
        ) : (
          <button id="start_stop" onClick={start}>
            Start
          </button>
        )}
        <button id="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
}
