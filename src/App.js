import React, { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";

function App() {
  const [selected, setSelected] = useState({
    Waldo: false,
    "Wizard Whitebeard": false,
    Wilma: false,
    Odlaw: false,
  });
  const [win, setWin] = useState(false);
  const [finalTime, setFinalTime] = useState(null);
  const initialTime = new Date().getTime();

  return (
    <div className="App">
      <Header selected={selected} win={win} setFinalTime={setFinalTime}/>
      <Main
        selected={selected}
        setSelected={setSelected}
        win={win}
        setWin={setWin}
        finalTime={finalTime}
        initialTime={initialTime}
      />
    </div>
  );
}

export default App;
