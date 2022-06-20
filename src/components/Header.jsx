import "../styles/Header.css";
import logo from "../assets/logo.png";
import waldo from "../assets/waldo.png";
import odlaw from "../assets/odlaw.png";
import wizard from "../assets/wizard_whitebeard.png";

const Header = () => {
  const avatars = [
    { src: waldo, alt: "Waldo" },
    { src: odlaw, alt: "Odlaw" },
    { src: wizard, alt: "Wizard Whitebeard" },
  ];

  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="where is waldo icon" className="logo" />
      </div>
      <div className="avatar-container">
        {avatars.map((avatar) => (
          <img src={avatar.src} alt={avatar.alt} className="avatar"/>
        ))}
      </div>
    </header>
  );
};

export default Header;
