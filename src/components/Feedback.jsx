import React, { useEffect, useState } from "react";
import "../styles/Feedback.css";

const Feedback = ({ error, setShowError, setShowFound, characterName }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (error) setShowError(false);
      else setShowFound(false);
    }, 700);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const icon = error ? "cross-icon" : "check-icon";

  return (
    visible && (
      <div className="container">
        <div className="feedback-container">
          <i className={`icon ${icon}`}></i>
          <p className="feedback-text">
            {error ? "Keep Looking" : `You found ${characterName}`}
          </p>
        </div>
      </div>
    )
  );
};

export default Feedback;
