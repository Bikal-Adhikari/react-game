import React from "react";

const GameOver = ({ winner }) => {
  return (
    <div id="game-Over">
      <h2>Game Over!</h2>
      <p>{winner} won!</p>
      <p>
        <button>Rematch!</button>
      </p>
    </div>
  );
};

export default GameOver;
