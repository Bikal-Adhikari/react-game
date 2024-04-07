import React from "react";

const Log = ({ turns, players }) => {
  console.log("Turns:", turns);
  console.log("Players:", players);
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {players[turn.player]} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
