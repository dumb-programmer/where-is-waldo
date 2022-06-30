import React, { useEffect, useRef } from "react";
import { getData } from "../firebase";

const ListItem = ({
  caption,
  items,
  index,
  cursor_pos,
  selected,
  setSelected,
  setWin,
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
    if (!selected[character]) {
      for (const position in position_of_character) {
        if (position.x === cursor_pos.x && position.y === cursor_pos.y) {
          const newState = { ...selected };
          newState[character] = true;
          setSelected(newState);

          if (newState.every((item) => item === true)) {
            setWin(true);
          }
        }
      }
    } else {
      console.log("The Character is already selected");
    }
  };

  return <li onClick={onClick}>{caption}</li>;
};

export default ListItem;
