import React from "react";
import ListItem from "./ListItem.jsx";
import "../styles/DropDown.css";

const DropDown = ({
  characters,
  setCharacters,
  cursor_pos,
  relativeCoords,
  data,
  setShowFound,
  setShowError,
  setCharacterName,
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
              relativeCoords={relativeCoords}
              setShowFound={setShowFound}
              setShowError={setShowError}
              data={data}
              setCharacterName={setCharacterName}
            />
          )
      )}
    </ul>
  );
};

export default DropDown;
