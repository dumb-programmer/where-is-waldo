import logo from "../assets/images/logo.png";
import Timer from "./Timer";
import "../styles/Header.css";

const Header = ({ characters, win, loading, initialTime, duration }) => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="where is waldo icon" className="logo" />
      </div>
      <div className="avatar-container">
        {characters.map((character) => (
          <div key={character.id} className="avatar">
            <img
              src={character.avatar}
              alt={character.name}
              className={`avatar-img ${character.found ? "grayscale" : ""}`}
            />
            <p className="avatar-name">{character.name.split(" ")[0]}</p>
          </div>
        ))}
      </div>
      <Timer
        win={win}
        loading={loading}
        initialTime={initialTime}
        duration={duration}
      />
    </header>
  );
};

export default Header;
