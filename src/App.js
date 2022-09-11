import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import waldo from "./assets/images/waldo.png";
import wilma from "./assets/images/wilma.png";
import odlaw from "./assets/images/odlaw.png";
import wizard from "./assets/images/wizard_whitebeard.png";
import "./styles/App.css";

function App() {
  const [characters, setCharacters] = useState([
    { id: 0, name: "Waldo", found: false, avatar: waldo },
    { id: 1, name: "Wilma", found: false, avatar: wilma },
    { id: 2, name: "Odlaw", found: false, avatar: odlaw },
    { id: 3, name: "Wizard Whitebeard", found: false, avatar: wizard },
  ]);

  const win = Object.values(characters).every((item) => item.found === true);
  const [loading, setLoading] = useState(true);
  const [counterTime, setCounterTime] = useState(null);

  return (
    <div className="App">
      <Header
        characters={characters}
        win={win}
        loading={loading}
        setCounterTime={setCounterTime}
      />
      <Main
        characters={characters}
        setCharacters={setCharacters}
        win={win}
        loading={loading}
        counterTime={counterTime}
        setLoading={setLoading}
      />
    </div>
  );
}

export default App;
