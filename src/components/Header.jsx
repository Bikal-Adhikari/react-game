import React from "react";
import gameLogo from "../assets/game-logo.png";

const Header = () => {
  return (
    <header>
      <img src={gameLogo} alt="hand drawn tic-tac-toe" />
      <h1>Tic-Tac-Toe</h1>
    </header>
  );
};

export default Header;
