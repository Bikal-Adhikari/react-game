import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import Player from "./components/Player";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const handelSelectSquare = () => {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  };
  return (
    <>
      <Header />
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handelSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </>
  );
}

export default App;
