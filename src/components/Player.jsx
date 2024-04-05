import React, { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handelClick = () => {
    setIsEditing(!isEditing);
  };
  let playerName = <span className="player-name">{name}</span>;
  //   let btnCaption = "Edit";
  if (isEditing) {
    playerName = <input type="text" required value={name} />;
    // btnCaption = "save";
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handelClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
