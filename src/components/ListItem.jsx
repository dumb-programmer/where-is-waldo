import React from "react";

const ListItem = ({
  character_name,
  characters,
  setCharacters,
  index,
  relativeCoords,
  setShowFound,
  setShowError,
  data,
  setFoundCharacterName,
}) => {
  const onClick = () => {
    const position_of_character = data[character_name];

    let match = false;
    for (const position of position_of_character) {
      if (relativeCoords.x === position.x && relativeCoords.y === position.y) {
        match = true;

        setShowFound(true);

        const newCharacters = [...characters];
        newCharacters[index].found = true;

        setCharacters(newCharacters);

        setFoundCharacterName(character_name);
      }
    }
    if (!match) {
      setShowError(true);
    }
  };
  return <li onClick={onClick}>{character_name}</li>;
};

export default ListItem;
