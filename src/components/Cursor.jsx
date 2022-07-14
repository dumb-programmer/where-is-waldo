import React, { useState } from "react";
import DropDown from "./DropDown";
import uniqid from "uniqid";
import "../styles/Cursor.css";

const Cursor = ({
  coordinates,
  data,
  setIsClicked,
  selected,
  setSelected,
  setWin,
  setShowFound,
  setShowError,
}) => {
  const { x, y } = coordinates;

  const [openDropDown, setOpenDropDown] = useState(false);
  const [characters, setCharacters] = useState([
    { id: uniqid(), name: "Waldo" },
    { id: uniqid(), name: "Wilma" },
    { id: uniqid(), name: "Odlaw" },
    { id: uniqid(), name: "Wizard Whitebeard" },
  ]);

  const onClick = () => {
    setIsClicked((prevState) => !prevState);
    setOpenDropDown((prevState) => !prevState);
  };

  const onMouseOut = () => {
    setIsClicked(false);
    setOpenDropDown(false);
  };

  return (
    <div
      className="cursor-container"
      style={{ transform: `translate3d(${x}px,${y}px,0px)` }}
      onClick={onClick}
      onMouseLeave={onMouseOut}
    >
      <div className="circle"></div>
      {openDropDown && (
        <DropDown
          characters={characters}
          setCharacters={setCharacters}
          cursor_pos={coordinates}
          data={data}
          selected={selected}
          setSelected={setSelected}
          setWin={setWin}
          setShowFound={setShowFound}
          setShowError={setShowError}
        />
      )}
    </div>
  );
};

export default Cursor;
