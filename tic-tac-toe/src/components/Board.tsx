import React from "react";
import Square from "./Square";
interface BoardProps {
  squares: string[];
  onClick: (i: number) => void;
}
export default function Board({ squares, onClick }: BoardProps) {
  return (
    <div>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClickSquare={() => onClick(i)} />
      ))}
    </div>
  );
}
