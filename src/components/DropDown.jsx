import React from "react";
import uniqid from "uniqid";
import ListItem from "./ListItem.jsx";
import "../styles/DropDown.css";

const DropDown = ({
  characters,
  setCharacters,
  cursor_pos,
  data,
  selected,
  setSelected,
  setWin,
  setShowFound,
  setShowError,
}) => {
  return (
    <ul className="drop-down">
      {characters.map((item, index) => (
        <ListItem
          key={item.id}
          caption={item.name}
          index={index}
          characters={characters}
          setCharacters={setCharacters}
          cursor_pos={cursor_pos}
          selected={selected}
          setSelected={setSelected}
          setWin={setWin}
          setShowFound={setShowFound}
          setShowError={setShowError}
          data={data}
        />
      ))}
    </ul>
  );
};

export default DropDown;
