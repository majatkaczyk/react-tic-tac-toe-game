import { useState } from "react";

import Board from "./Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  //   const winner = calculateWinner(history[stepNumber]);

  const handleClick = (i: number) => {
    const timeInHistory = history.slice(0, stepNumber + 1);

    const current = timeInHistory[stepNumber];

    const squares = [...current];

    // if (winner || squares[i]) return;

    squares[i] = xIsNext ? "X" : "O";
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);

    setXisNext(!xIsNext);
  };

  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div>
        {/* <p>
          {winner ? `Winner: ${winner}` : `Next Player ${xIsNext ? "X" : "O"}`}
        </p> */}
      </div>
    </>
  );
}
