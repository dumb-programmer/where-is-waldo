import React from "react";

const ListItem = ({
  caption,
  characters,
  setCharacters,
  index,
  cursor_pos,
  setWin,
  setShowFound,
  setShowError,
  data,
}) => {
  const onClick = () => {
    const character = characters[index].name;
    const position_of_character = data[character];

    let match = false;
    for (const position of position_of_character) {
      if (cursor_pos.x === +position.x && cursor_pos.y === +position.y) {
        match = true;

        setShowFound(true);

        const newCharacters = [...characters];
        newCharacters[index].found = true;

        setCharacters(newCharacters);

        if (Object.values(characters).every((item) => item.found === true)) {
          setWin(true);
        }
      }
    }
    if (!match) {
      setShowError(true);
    }
  };
  return <li onClick={onClick}>{caption}</li>;
};

export default ListItem;
