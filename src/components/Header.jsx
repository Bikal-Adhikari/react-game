import React from "react";
import gameLogo from "../assets/game-logo.png";
import nameLogo from "../assets/tic-tac-toe-clipart-8.jpg";

const Header = () => {
  return (
    <header>
      <img src={gameLogo} alt="hand drawn tic-tac-toe" />
      <div>
        <img src={nameLogo} alt="hand drawn tic-tac-toe" width="500px" />
      </div>
    </header>
  );
};

export default Header;
