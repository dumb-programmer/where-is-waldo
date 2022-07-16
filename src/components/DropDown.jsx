import React from "react";
import ListItem from "./ListItem.jsx";
import "../styles/DropDown.css";

const DropDown = ({
  characters,
  setCharacters,
  cursor_pos,
  data,
  setWin,
  setShowFound,
  setShowError,
}) => {
  return (
    <ul className="drop-down">
      {characters.map(
        (character, index) =>
          !character.found && (
            <ListItem
              key={character.id}
              caption={character.name}
              index={index}
              characters={characters}
              setCharacters={setCharacters}
              cursor_pos={cursor_pos}
              setWin={setWin}
              setShowFound={setShowFound}
              setShowError={setShowError}
              data={data}
            />
          )
      )}
    </ul>
  );
};

export default DropDown;
