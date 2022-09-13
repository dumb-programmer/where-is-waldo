import { useState, useEffect, useRef } from "react";
import Cursor from "./Cursor.jsx";
import Form from "./Form.jsx";
import Leaderboard from "./Leaderboard.jsx";
import Feedback from "./Feedback.jsx";
import { getData } from "../firebase";
import puzzleImage from "../assets/images/puzzle.jpg";
import { flushSync } from "react-dom";

const Main = ({
  characters,
  setCharacters,
  win,
  loading,
  initialTime,
  duration,
  setLoading,
}) => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [isMouseIn, setIsMouseIn] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showFound, setShowFound] = useState(false);
  const [showError, setShowError] = useState(false);
  const [data, setData] = useState([]);
  const [foundCharacterName, setFoundCharacterName] = useState("");
  const [relativeCoords, setRelativeCoords] = useState({ x: 0, y: 0 });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const imgRef = useRef();

  const calculateRelativeCoordinates = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    var offset = {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    };
    const val1 = Math.round(
      ((e.pageX - offset.left) / imgRef.current.offsetWidth) * 100
    );
    const val2 = Math.round(
      ((e.pageY - offset.top) / imgRef.current.offsetHeight) * 100
    );
    setRelativeCoords({ x: val1, y: val2 });
  };

  const onMouseMove = (e) => {
    if (!isClicked) {
      setIsMouseIn(true);
      const x = e.pageX;
      const y = e.pageY + document.querySelector("main").scrollTop;
      setCoordinates({ x, y });
      calculateRelativeCoordinates(e);
    }
  };

  const onMouseLeave = () => {
    setIsMouseIn(false);
  };

  useEffect(() => {
    getData().then((snapshot) => {
      setData(snapshot.val());
      flushSync(() => {
        setLoading(false);
      });
      initialTime.current = new Date().getTime();
    });
  }, [setLoading, initialTime]);

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
      {!formSubmitted ? (
        <>
          <Form
            totalDuration={duration.current}
            onFormSubmit={() => setFormSubmitted(true)}
          />
          <img src={puzzleImage} alt="puzzle" className="puzzle-img" />
        </>
      ) : (
        <Leaderboard />
      )}
    </main>
  ) : (
    <main onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <img ref={imgRef} src={puzzleImage} alt="puzzle" className="puzzle-img" />
      {isMouseIn && (
        <Cursor
          coordinates={coordinates}
          relativeCoords={relativeCoords}
          data={data}
          setIsClicked={setIsClicked}
          characters={characters}
          setCharacters={setCharacters}
          setShowFound={setShowFound}
          setShowError={setShowError}
          setFoundCharacterName={setFoundCharacterName}
        />
      )}
      {showError && <Feedback error={true} setShowError={setShowError} />}
      {showFound && (
        <Feedback
          setShowFound={setShowFound}
          characterName={foundCharacterName}
        />
      )}
    </main>
  );
};

export default Main;
