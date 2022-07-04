import React, { useEffect, useState } from "react";
import "./styles/App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import { initFirebase } from "./firebase";

function App() {
  const [selected, setSelected] = useState({
    Waldo: false,
    "Wizard Whitebeard": false,
    Wilma: false,
    Odlaw: false,
  });
  const [win, setWin] = useState(false);

  useEffect(() => {
    initFirebase();
  }, []);

  return (
    <div className="App">
      <Header selected={selected} win={win} />
      <Main
        selected={selected}
        setSelected={setSelected}
        win={win}
        setWin={setWin}
      />
    </div>
  );
}

export default App;
