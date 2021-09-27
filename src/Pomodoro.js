import { useState, useEffect } from "react";
import Break from "./Break";
import Session from "./Session";
import Timer from "./Timer";

function Pomodoro() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [clock, setClock] = useState(25 * 60);
  const [currentTimer, setCurrentTimer] = useState("Session");
  const [intervalID, setIntervalID] = useState(0);
  const audio = document.querySelector("#beep");

  useEffect(() => {
    if (clock === 0) {
      setCurrentTimer((prevCurrentTimer) =>
        prevCurrentTimer === "Session" ? "Break" : "Session"
      );

      setClock(
        currentTimer === "Session" ? breakLength * 60 : sessionLength * 60
      );

      if (audio) {
        audio.play();
      }
    }
  }, [clock, currentTimer, breakLength, sessionLength, audio]);

  const convertToTime = (count) => {
    const minutes =
      Math.floor(count / 60) < 10
        ? `0${Math.floor(count / 60)}`
        : Math.floor(count / 60);
    const seconds = count % 60 < 10 ? `0${count % 60}` : count % 60;

    return `${minutes}:${seconds}`;
  };

  const handleBreakDecrement = () => {
    if (breakLength <= 1) {
      return;
    } else {
      setBreakLength(breakLength - 1);
    }
  };

  const handdleBreakIncrement = () => {
    if (breakLength >= 60) {
      return;
    } else {
      setBreakLength(breakLength + 1);
    }
  };

  const handleSessionDecrement = () => {
    if (sessionLength <= 1) {
      return;
    } else {
      setSessionLength(sessionLength - 1);
      setClock(clock - 60);
    }
  };

  const handleSessionIncrement = () => {
    if (sessionLength >= 60) {
      return;
    } else {
      setSessionLength(sessionLength + 1);
      setClock(clock + 60);
    }
  };

  const handlePlayPause = () => {
    if (intervalID) {
      clearInterval(intervalID);
      setIntervalID(0);
      return;
    } else {
      const newIntervalID = setInterval(() => {
        setClock((prevClock) => prevClock - 1);
      }, 1000);
      setIntervalID(newIntervalID);
    }
  };

  const handleReset = () => {
    setSessionLength(25);
    setBreakLength(5);
    setClock(25 * 60);
    setCurrentTimer("Session");
    setIntervalID(0);
    clearInterval(intervalID);

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  return (
    <>
      <h1>Pomodoro Clock</h1>

      <Break
        breakDecrement={handleBreakDecrement}
        breakIncrement={handdleBreakIncrement}
        breakLength={breakLength}
      />

      <Session
        sessionDecrement={handleSessionDecrement}
        sessionIncrement={handleSessionIncrement}
        sessionLength={sessionLength}
      />

      <Timer
        currentTimer={currentTimer}
        clock={convertToTime(clock)}
        handlePlayPause={handlePlayPause}
        handleReset={handleReset}
        isRunning={intervalID}
      />

      <audio
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </>
  );
}

export default Pomodoro;
