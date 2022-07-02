import React, { useState } from "react";
import DropDown from "./DropDown";
import "../styles/Cursor.css";

const Cursor = ({
  coordinates,
  setIsClicked,
  selected,
  setSelected,
  setWin,
  setShowFound,
  setShowError,
}) => {
  const { x, y } = coordinates;

  const [openDropDown, setOpenDropDown] = useState(false);
  const [items, setItems] = useState([
    "Waldo",
    "Wilma",
    "Odlaw",
    "Wizard Whitebeard",
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
          items={items}
          setItems={setItems}
          cursor_pos={coordinates}
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
