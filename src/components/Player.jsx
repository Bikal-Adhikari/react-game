import React, { useState } from "react";

const Player = ({ initialName, symbol, isActive }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handelClick = () => {
    setIsEditing((editing) => !editing);
  };

  const handelChange = (e) => {
    setPlayerName(e.target.value);
  };
  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handelChange} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handelClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
