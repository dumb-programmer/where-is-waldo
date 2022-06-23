import React, { useEffect, useState } from "react";
import "./styles/App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Cursor from "./components/Cursor.jsx";
import puzzleImage from "./assets/images/puzzle.jpg";

function App() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [isMouseIn, setIsMouseIn] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const main = document.querySelector("main");
    const x = main.clientX - 50;
    const y = main.clientY - 120;
    setCoordinates({ x, y });
  }, []);

  const onMouseMove = (e) => {
    if (!isClicked) {
      setIsMouseIn(true);
      const x = e.clientX - 50;
      const y = e.clientY - 120;
      setCoordinates({ x, y });
    }
  };

  const onMouseLeave = () => {
    setIsMouseIn(false);
    setIsClicked(false);
  };

  return (
    <div className="App">
      <Header />
      <main onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
        <img src={puzzleImage} alt="puzzle" className="puzzle-img" />
        {isMouseIn && (
          <Cursor coordinates={coordinates} setIsClicked={setIsClicked} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
