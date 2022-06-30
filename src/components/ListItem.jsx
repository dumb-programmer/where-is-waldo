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
    console.log(position_of_character);
    if (!selected[character]) {
      for (const position of position_of_character) {
        if (cursor_pos.x === +position.x && cursor_pos.y === +position.y) {
          console.log("matched");
          const newState = { ...selected };
          newState[character] = true;
          setSelected(newState);

          setItems((prevState) =>
            prevState.filter((item) => item !== character)
          );

          if (Object.values(newState).every((item) => item === true)) {
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
