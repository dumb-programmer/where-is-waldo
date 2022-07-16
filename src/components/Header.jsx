import "../styles/Header.css";
import logo from "../assets/images/logo.png";
import React from "react";
import Timer from "./Timer";

const Header = ({ characters, win, setFinalTime }) => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="where is waldo icon" className="logo" />
      </div>
      <div className="avatar-container">
        {win ||
          characters.map((character) => (
            <img
              key={character.id}
              src={character.avatar}
              alt={character.name}
              className={`avatar ${character.found ? "grayscale" : ""}`}
            />
          ))}
      </div>
      <Timer win={win} setFinalTime={setFinalTime} />
    </header>
  );
};

export default Header;
