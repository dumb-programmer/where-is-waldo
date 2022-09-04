import { useState, useEffect } from "react";
import Cursor from "./Cursor.jsx";
import WinnerScreen from "./WinnerScreen.jsx";
import Feedback from "./Feedback.jsx";
import { getData } from "../firebase";
import puzzleImage from "../assets/images/puzzle.jpg";

const Main = ({
  characters,
  setCharacters,
  win,
  loading,
  setWin,
  finalTime,
  setLoading,
}) => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [isMouseIn, setIsMouseIn] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showFound, setShowFound] = useState(false);
  const [showError, setShowError] = useState(false);
  const [initialTime, setInitialTime] = useState(0);
  const [data, setData] = useState([]);
  const [characterName, setCharacterName] = useState("");

  useEffect(() => {
    setInitialTime(new Date());
    getData().then((snapshot) => {
      setData(snapshot);
      setLoading(false);
    });
  }, []);

  const onMouseMove = (e) => {
    if (!isClicked) {
      setIsMouseIn(true);
      const x = e.pageX;
      const y = e.pageY + document.querySelector("main").scrollTop;
      setCoordinates({ x, y });
    }
  };

  const onMouseLeave = () => {
    setIsMouseIn(false);
  };

  if (loading) {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "max-content",
          cursor: "auto",
        }}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              margin: "auto",
              background: "none",
              display: "block",
              shapeRendering: "auto",
              strokeWidth: "10px",
            }}
            width="70px"
            height="70px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle
              cx="50"
              cy="50"
              fill="none"
              stroke="#9ad0ec"
              strokeWidth="10"
              r="35"
              strokeDasharray="164.93361431346415 56.97787143782138"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1s"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
              ></animateTransform>
            </circle>
          </svg>
        </div>
      </main>
    );
  }

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
      {showFound && (
        <Feedback setShowFound={setShowFound} characterName={characterName} />
      )}
    </main>
  );
};

export default Main;
