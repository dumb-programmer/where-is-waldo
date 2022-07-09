import React, { useState, useEffect } from "react";
import { getLeaderboard } from "../firebase";
import uniqid from "uniqid";
import "../styles/Leaderboard.css";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    getLeaderboard().then((snap) => {
      setLeaderboard(getArray(snap.val()));
    });
  }, []);

  const getArray = (leaderboard) => {
    const array = [];
    for (const key in leaderboard) {
      array.push(leaderboard[key]);
    }
    console.log(array);
    return array;
  };

  return (
    <div className="flex-container">
      <table>
        <thead>
          <tr>
            <td className="table-header" colSpan="2">
              Leaderboard
            </td>
          </tr>
          <tr>
            <td>
              <th>Name</th>
            </td>
            <td>
              <th>Time</th>
            </td>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((item) => (
            <tr key={uniqid()}>
              <td>{item.name}</td>
              <td>{item.counter}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
