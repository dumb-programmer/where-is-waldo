import React from "react";
import uniqid from "uniqid";
import ListItem from "./ListItem.jsx";
import "../styles/DropDown.css";

const DropDown = ({
  items,
  setItems,
  cursor_pos,
  data,
  selected,
  setSelected,
  setWin,
  setShowFound,
  setShowError,
}) => {
  return (
    <ul className="drop-down">
      {items.map((item, index) => (
        <ListItem
          key={uniqid()}
          caption={item}
          index={index}
          items={items}
          setItems={setItems}
          cursor_pos={cursor_pos}
          selected={selected}
          setSelected={setSelected}
          setWin={setWin}
          setShowFound={setShowFound}
          setShowError={setShowError}
          data={data}
        />
      ))}
    </ul>
  );
};

export default DropDown;
