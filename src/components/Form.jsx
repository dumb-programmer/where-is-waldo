import React, { useState } from "react";
import { submitData } from "../firebase";
import "../styles/Form.css";

const Form = ({ initialTime, finalTime, setIsFormSubmitted }) => {
  const [name, setName] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onSubmit = (e) => {
    const finTime = new Date();
    const diff = finTime.getTime() - initialTime.getTime();
    e.preventDefault();
    submitData({ name: e.target.name.value, time: diff, counter: finalTime });
    setIsFormSubmitted(true);
  };

  return (
    <div className="modal-container">
      <form onSubmit={onSubmit}>
        <div className="form-controls">
          <label htmlFor="time">Time:</label>
          <span id="time">
            {finalTime
              ? `${finalTime.hr}:${finalTime.min}:${finalTime.sec}:${finalTime.msec}`
              : ""}
          </span>
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
