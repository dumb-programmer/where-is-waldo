import "../styles/Header.css";
import logo from "../assets/images/logo.png";
import React from "react";
import Timer from "./Timer";

const Header = ({ characters, win, loading, setFinalTime }) => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="where is waldo icon" className="logo" />
      </div>
      <div className="avatar-container">
        {win ||
          characters.map((character) => (
            <div className="avatar">
              <img
                key={character.id}
                src={character.avatar}
                alt={character.name}
                className={`avatar-img ${character.found ? "grayscale" : ""}`}
              />
              <p className="avatar-name">{character.name.split(" ")[0]}</p>
            </div>
          ))}
      </div>
      <Timer win={win} loading={loading} setFinalTime={setFinalTime} />
    </header>
  );
};

export default Header;
