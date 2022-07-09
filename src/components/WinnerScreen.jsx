import React, { useState } from "react";
import Form from "./Form.jsx";
import Leaderboard from "./Leaderboard.jsx";
import "../styles/WinnerScreen.css";

const WinnerScreen = ({ finalTime, initialTime }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  return isFormSubmitted ? (
    <Leaderboard />
  ) : (
    <Form
      finalTime={finalTime}
      initialTime={initialTime}
      setIsFormSubmitted={setIsFormSubmitted}
    />
  );
};

export default WinnerScreen;
