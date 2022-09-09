import React, { useState, useEffect } from "react";
import formatTime from "../formatTime";
import "../styles/Timer.css";

const Timer = ({ win, loading, setCounterTime }) => {
  const [timer, setTimer] = useState(null);
  const [initalTime, setInitialTime] = useState(null);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    if (flag && !loading) {
      setInitialTime(new Date().getTime());
      setFlag(false);
    }
    if (!loading) {
      const timerId = setInterval(() => {
        setTimer(new Date().getTime() - initalTime);
      }, 1);
      if (win) {
        clearInterval(timerId);
        setCounterTime(formatTime(timer));
      }
      return () => clearInterval(timerId);
    }
  }, [timer, win, loading]);

  return (
    <div className="timer">
      <h1>{formatTime(timer)}</h1>
    </div>
  );
};

export default Timer;
