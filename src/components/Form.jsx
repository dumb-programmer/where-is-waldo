import React, { useEffect, useState } from "react";
import { submitData } from "../firebase";
import "../styles/Form.css";

const Form = ({ initialTime, counterTime, onFormSubmit }) => {
  const [name, setName] = useState("");
  const [finalTime, setFinalTime] = useState(null);

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const diff = finalTime - initialTime;
    await submitData({
      name: e.target.name.value,
      time: diff,
      counter: counterTime,
    });
    onFormSubmit();
  };

  useEffect(() => {
    setFinalTime(new Date().getTime());
  }, []);

  return (
    <div className="modal-container">
      <form onSubmit={onSubmit}>
        <div className="form-controls">
          <label htmlFor="time">Time:</label>
          <span id="time">{counterTime}</span>
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
