import React from "react";

const ListItem = ({
  caption,
  characters,
  setCharacters,
  index,
  cursor_pos,
  selected,
  setSelected,
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
        const newState = { ...selected };
        newState[character] = true;
        setSelected(newState);
        setShowFound(true);

        setCharacters((prevState) =>
          prevState.filter((item) => item.name !== character)
        );

        if (Object.values(newState).every((item) => item === true)) {
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
