import React from "react";

const WinnerScreen = ({ finalTime }) => {
  console.log(finalTime);
  return (
    <h1>
      Winner Screen, in{" "}
      {finalTime
        ? `${finalTime.hr}:${finalTime.min}:${finalTime.sec}`
        : ""}
    </h1>
  );
};

export default WinnerScreen;
