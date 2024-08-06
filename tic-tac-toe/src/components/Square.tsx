import React from "react";

interface SquareProps {
  player: "x" | "o" | null;
  onClickSquare: (event: React.MouseEvent<HTMLButtonElement>) => void;
  index: number;
}

export default function Square({ player, onClickSquare, index }: SquareProps) {
  return (
    <button key={index} onClick={onClickSquare}>
      {player}
    </button>
  );
}
