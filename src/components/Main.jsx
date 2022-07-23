import { useState, useEffect } from "react";
import Cursor from "./Cursor.jsx";
import WinnerScreen from "./WinnerScreen.jsx";
import Feedback from "./Feedback.jsx";
import { getData } from "../firebase";
import puzzleImage from "../assets/images/puzzle.jpg";

const Main = ({ characters, setCharacters, win, setWin, finalTime }) => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [isMouseIn, setIsMouseIn] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showFound, setShowFound] = useState(false);
  const [showError, setShowError] = useState(false);
  const [initialTime, setInitialTime] = useState(0);
  const [data, setData] = useState([]);
  const [characterName, setCharacterName] = useState("");

  useEffect(() => {
    const main = document.querySelector("main");
    const x = main.clientX;
    const y = main.clientY;
    setCoordinates({ x, y });
    setInitialTime(new Date());
    getData().then((snapshot) => {
      setData(snapshot);
    });
  }, []);

  const onMouseMove = (e) => {
    if (!isClicked) {
      setIsMouseIn(true);
      const x = e.clientX;
      const y = e.clientY;
      setCoordinates({ x, y });
    }
  };

  const onMouseLeave = () => {
    setIsMouseIn(false);
  };

  return win ? (
    <main style={{ cursor: "auto" }}>
      <WinnerScreen finalTime={finalTime} initialTime={initialTime} />
    </main>
  ) : (
    <main onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <img src={puzzleImage} alt="puzzle" className="puzzle-img" />
      {isMouseIn && (
        <Cursor
          coordinates={coordinates}
          data={data}
          setIsClicked={setIsClicked}
          characters={characters}
          setCharacters={setCharacters}
          setWin={setWin}
          setShowFound={setShowFound}
          setShowError={setShowError}
          setCharacterName={setCharacterName}
        />
      )}
      {showError && <Feedback error={true} setShowError={setShowError} />}
      {showFound && <Feedback setShowFound={setShowFound} characterName={characterName}/>}
    </main>
  );
};

export default Main;
