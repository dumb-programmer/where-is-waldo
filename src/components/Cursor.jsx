import React, { useState } from "react";
import DropDown from "./DropDown";
import "../styles/Cursor.css";

const Cursor = ({
  coordinates,
  data,
  setIsClicked,
  characters,
  setCharacters,
  setWin,
  setShowFound,
  setShowError,
  setCharacterName
}) => {
  const { x, y } = coordinates;

  const [openDropDown, setOpenDropDown] = useState(false);

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
      style={{ transform: `translate(${x}px,${y}px)` }}
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
          setWin={setWin}
          setShowFound={setShowFound}
          setShowError={setShowError}
          setCharacterName={setCharacterName}
        />
      )}
    </div>
  );
};

export default Cursor;
