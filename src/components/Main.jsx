import { useState, useRef, useEffect } from "react";
import Cursor from "./Cursor.jsx";
import WinnerScreen from "./WinnerScreen.jsx";
import Feedback from "./Feedback.jsx";
import { getData } from "../firebase";
import puzzleImage from "../assets/images/puzzle.jpg";

const Main = ({ selected, setSelected, win, setWin }) => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [isMouseIn, setIsMouseIn] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showFound, setShowFound] = useState(false);
  const [showError, setShowError] = useState(false);
  const data = useRef(null);

  useEffect(() => {
    const main = document.querySelector("main");
    const x = main.pageX - 49;
    const y = main.pageY - 120;
    setCoordinates({ x, y });
    getData().then((snapshot) => {
      data.current = snapshot;
    });
  }, []);
  
  const onMouseMove = (e) => {
    if (!isClicked) {
      setIsMouseIn(true);
      const x = e.pageX - 49;
      const y = e.pageY - 120;
      setCoordinates({ x, y });
    }
  };

  const onMouseLeave = () => {
    setIsMouseIn(false);
  };

  if (win) {
    return (
      <main style={{ cursor: "auto" }}>
        <WinnerScreen />
      </main>
    );
  } else {
    return (
      <main onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
        <img src={puzzleImage} alt="puzzle" className="puzzle-img" />
        {isMouseIn && (
          <Cursor
            coordinates={coordinates}
            data={data}
            setIsClicked={setIsClicked}
            selected={selected}
            setSelected={setSelected}
            setWin={setWin}
            setShowFound={setShowFound}
            setShowError={setShowError}
          />
        )}
        {showError && <Feedback error={true} setShowError={setShowError} />}
        {showFound && <Feedback setShowFound={setShowFound} />}
      </main>
    );
  }
};

export default Main;