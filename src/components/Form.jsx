import React, { useState } from "react";
import { submitData } from "../firebase";
import formatTime from "../formatTime";
import "../styles/Form.css";

const Form = ({ totalDuration, onFormSubmit }) => {
  const [name, setName] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await submitData({
      name: e.target.name.value,
      time: totalDuration,
      counter: formatTime(totalDuration),
    });
    onFormSubmit();
  };

  return (
    <div className="modal-container">
      <form onSubmit={onSubmit}>
        <div className="form-controls">
          <label htmlFor="time">Time:</label>
          <span id="time">{formatTime(totalDuration)}</span>
        </div>
        <div className="form-controls">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            maxLength="50"
            value={name}
            onChange={onNameChange}
            required
          />
        </div>
        <div className="btn-container">
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
