import { useState } from "react";
import "./App.css";
import MyTimer from "./useTimer";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [session, setSession] = useState(25);
  const [isRunning, setIsRunning] = useState(false);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 60 * session);

  const handleReset = () => {
    setSession(25);
    setBreakLength(5);
    setIsRunning(false);
  };

  const breakDecrement = () => {
    if (breakLength <= 0) {
      return;
    } else {
      setBreakLength(breakLength - 1);
    }
  };

  const breakIncrement = () => {
    if (breakLength >= 60) {
      return;
    } else {
      setBreakLength(breakLength + 1);
    }
  };

  const sessionDecrement = () => {
    if (session <= 0) {
      return;
    } else {
      setSession(session - 1);
    }
  };

  const sessionIncrement = () => {
    if (session >= 60) {
      return;
    } else {
      setSession(session + 1);
    }
  };

  return (
    <div className="App">
      <h1>25 + 5 CLOCK</h1>

      <div className="break">
        <div id="break-label">Break Length</div>
        <button id="break-decrement" onClick={breakDecrement}>
          -
        </button>
        <div id="break-length">{breakLength}</div>
        <button id="break-increment" onClick={breakIncrement}>
          +
        </button>
      </div>

      <div className="session">
        <div id="session-label">Session Length</div>
        <button id="session-decrement" onClick={sessionDecrement}>
          -
        </button>
        <div id="session-length">{session}</div>
        <button id="session-increment" onClick={sessionIncrement}>
          +
        </button>
      </div>

      <MyTimer expiryTimestamp={time} min={session} handleReset={handleReset} />

      <audio
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </div>
  );
}

export default App;
