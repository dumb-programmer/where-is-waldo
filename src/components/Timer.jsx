import React, { useState, useEffect } from "react";
import "../styles/Timer.css";

const Timer = ({ win, setFinalTime }) => {
  const [timer, setTimer] = useState({ hr: 0, min: 0, sec: 0, msec: 0 });

  const incrementTimer = ({ hr, min, sec, msec }) => {
    if (msec < 998) {
      msec++;
    } else if (sec < 58) {
      msec = 0;
      sec++;
    } else if (min < 58) {
      sec = 0;
      min++;
    } else {
      min = 0;
      hr++;
    }

    return { hr, min, sec, msec };
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer(incrementTimer(timer));
    }, 1);
    if (win) {
      clearInterval(timerId);
      setFinalTime(timer);
    }
    return () => clearInterval(timerId);
  }, [timer, win, setFinalTime]);

  return (
    <div className="timer">
      <h1>{`${timer.hr}:${timer.min}:${timer.sec}.${timer.msec}`}</h1>
    </div>
  );
};

export default Timer;
