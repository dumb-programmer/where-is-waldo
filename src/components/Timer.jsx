import React, { useState, useEffect, useRef } from "react";
import formatTime from "../formatTime";
import "../styles/Timer.css";

const Timer = ({ win, loading, initialTime, duration }) => {
  const [timer, setTimer] = useState(null);
  const intervalId = useRef(null);

  if (win) {
    duration.current = timer;
    clearInterval(intervalId.current);
  }

  useEffect(() => {
    if (!loading) {
      intervalId.current = setInterval(() => {
        setTimer(new Date().getTime() - initialTime.current);
      }, 1);
      return () => {
        clearInterval(intervalId.current);
      };
    }
  }, [loading, initialTime]);

  return (
    <div className="timer">
      <h1>{formatTime(timer)}</h1>
    </div>
  );
};

export default Timer;
