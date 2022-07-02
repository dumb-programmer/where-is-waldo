import React, { useEffect, useState } from "react";
import "./styles/App.css";
import Header from "./components/Header.jsx";
import Cursor from "./components/Cursor.jsx";
import WinnerScreen from "./components/WinnerScreen.jsx";
import Feedback from "./components/Feedback.jsx";
import { initFirebase } from "./firebase";
import puzzleImage from "./assets/images/puzzle.jpg";

function App() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [isMouseIn, setIsMouseIn] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [selected, setSelected] = useState({
    Waldo: false,
    "Wizard Whitebeard": false,
    Wilma: false,
    Odlaw: false,
  });
  const [win, setWin] = useState(false);
  const [showFound, setShowFound] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const main = document.querySelector("main");
    const x = main.pageX - 49;
    const y = main.pageY - 120;
    setCoordinates({ x, y });
    initFirebase();
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
    setIsClicked(false);
  };

  return (
    <div className="App">
      <Header selected={selected} win={win} />
      {win ? (
        <WinnerScreen />
      ) : (
        <main onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
          <img src={puzzleImage} alt="puzzle" className="puzzle-img" />
          {isMouseIn && (
            <Cursor
              coordinates={coordinates}
              setIsClicked={setIsClicked}
              selected={selected}
              setSelected={setSelected}
              setWin={setWin}
              setShowFound={setShowFound}
              setShowError={setShowError}
            />
          )}
          {showError && <Feedback error={true} setShowError={setShowError}/>}
          {showFound && <Feedback setShowFound={setShowFound}/>}
        </main>
      )}
    </div>
  );
}

export default App;
