import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [check, setCheck] = useState(true);

  const handleClick = (index) => {
    if (calculateWinner(board) || board[index]) return;
    board[index] = check ? "🐇" : "🐢";
    setBoard(board);
    setCheck(!check);
  };

  const winner = calculateWinner(board);
  let status;
  if (winner) status = `Winner: ${winner}`;
  else status = `Next player: ${check ? "🐇" : "🐢"}`;

  const handleRestart = () => {
    setCheck(true);
    setBoard(Array(9).fill(null));
  };

  function calculateWinner(board) {
    const pattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < pattern.length; i++) {
      const [a, b, c] = pattern[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c])
        return board[a];
    }
    return null;
  }

  return (
    <div className="board">
      <div className="row jc-center">
        <Square
          className="b-bottom-right"
          value={board[0]}
          onClick={() => handleClick(0)}
        />
        <Square
          className="b-bottom-right"
          value={board[1]}
          onClick={() => handleClick(1)}
        />
        <Square
          className="b-bottom"
          value={board[2]}
          onClick={() => handleClick(2)}
        />
      </div>
      <div className="row jc-center">
        <Square
          className="b-bottom-right"
          value={board[3]}
          onClick={() => handleClick(3)}
        />
        <Square
          className="b-bottom-right"
          value={board[4]}
          onClick={() => handleClick(4)}
        />
        <Square
          className="b-bottom"
          value={board[5]}
          onClick={() => handleClick(5)}
        />
      </div>
      <div className="row jc-center">
        <Square
          className="b-right"
          value={board[6]}
          onClick={() => handleClick(6)}
        />
        <Square
          className="b-right"
          value={board[7]}
          onClick={() => handleClick(7)}
        />
        <Square value={board[8]} onClick={() => handleClick(8)} />
      </div>
      <div className="lastlines">
        <div className="status">
          <h3>{status}</h3>
        </div>
        <div>
          <button className="restart" onClick={handleRestart}>
            Restart Game!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Board;
