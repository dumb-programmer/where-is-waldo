import React from "react";
import uniqid from "uniqid";
import ListItem from "./ListItem.jsx";
import "../styles/DropDown.css";

const DropDown = () => {
  const items = [
    {
      id: uniqid(),
      name: "Waldo",
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
        <ListItem key={item.id} caption={item.name} index={index} items={items} />
      ))}
    </ul>
  );
};

export default DropDown;
