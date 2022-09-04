import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import uniqid from "uniqid";
import waldo from "./assets/images/waldo.png";
import wilma from "./assets/images/wilma.png";
import odlaw from "./assets/images/odlaw.png";
import wizard from "./assets/images/wizard_whitebeard.png";
import { initFirebase, signIn } from "./firebase";
import "./styles/App.css";

function App() {
  const [characters, setCharacters] = useState([
    { id: uniqid(), name: "Waldo", found: false, avatar: waldo },
    { id: uniqid(), name: "Wilma", found: false, avatar: wilma },
    { id: uniqid(), name: "Odlaw", found: false, avatar: odlaw },
    { id: uniqid(), name: "Wizard Whitebeard", found: false, avatar: wizard },
  ]);

  const [win, setWin] = useState(false);
  const [finalTime, setFinalTime] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initFirebase();
    signIn();
  });

  return (
    <div className="App">
      <Header
        characters={characters}
        win={win}
        loading={loading}
        setFinalTime={setFinalTime}
      />
      <Main
        characters={characters}
        setCharacters={setCharacters}
        win={win}
        loading={loading}
        setWin={setWin}
        finalTime={finalTime}
        setLoading={setLoading}
      />
    </div>
  );
}

export default App;
