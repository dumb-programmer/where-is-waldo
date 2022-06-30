import React from "react";
import uniqid from "uniqid";
import ListItem from "./ListItem.jsx";
import "../styles/DropDown.css";

const DropDown = ({ cursor_pos, selected, setSelected, setWin }) => {
  const items = [
    {
      id: uniqid(),
      name: "Waldo",
    },
    {
      id: uniqid(),
      name: "Wilma",
    },
    {
      id: uniqid(),
      name: "Odlaw",
    },
    {
      id: uniqid(),
      name: "Wizard Whitebeard",
    },
  ];

  return (
    <ul className="drop-down">
      {items.map((item, index) => (
        <ListItem
          key={item.id}
          caption={item.name}
          index={index}
          items={items}
          cursor_pos={cursor_pos}
          selected={selected}
          setSelected={setSelected}
          setWin={setWin}
        />
      ))}
    </ul>
  );
};

export default DropDown;
