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
    const sortedLeaderboard = [];
    for (const key in leaderboard) {
      sortedLeaderboard.push(leaderboard[key]);
    }
    return sortedLeaderboard.sort((a, b) => a.time - b.time);
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
            <th>Name</th>
            <th>Time</th>
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
