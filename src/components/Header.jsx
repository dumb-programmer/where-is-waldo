import "../styles/Header.css";
import uniqid from "uniqid";
import logo from "../assets/images/logo.png";
import waldo from "../assets/images/waldo.png";
import odlaw from "../assets/images/odlaw.png";
import wizard from "../assets/images/wizard_whitebeard.png";
import React from 'react';

const Header = () => {
  const avatars = [
    { id: uniqid(), src: waldo, alt: "Waldo" },
    { id: uniqid(), src: odlaw, alt: "Odlaw" },
    { id: uniqid(), src: wizard, alt: "Wizard Whitebeard" },
  ];

  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="where is waldo icon" className="logo" />
      </div>
      <div className="avatar-container">
        {avatars.map((avatar) => (
          <img
            key={avatar.id}
            src={avatar.src}
            alt={avatar.alt}
            className="avatar"
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
