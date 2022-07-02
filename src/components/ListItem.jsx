import React, { useEffect, useRef } from "react";
import { getData } from "../firebase";

const ListItem = ({
  caption,
  items,
  setItems,
  index,
  cursor_pos,
  selected,
  setSelected,
  setWin,
  setShowFound,
  setShowError,
}) => {
  const data = useRef(null);

  useEffect(() => {
    getData().then((snapshot) => {
      data.current = snapshot;
    });
  }, []);
  const onClick = () => {
    const character = items[index];
    const position_of_character = data.current[character];
    let match = false;
    for (const position of position_of_character) {
      if (cursor_pos.x === +position.x && cursor_pos.y === +position.y) {
        match = true;
        const newState = { ...selected };
        newState[character] = true;
        setSelected(newState);
        setShowFound(true);

        setItems((prevState) => prevState.filter((item) => item !== character));

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
