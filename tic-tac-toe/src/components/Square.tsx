import React from "react";
import { Tile } from "./gameStyles";

interface SquareProps {
  player: "x" | "o" | null;
  onClickSquare: (event: React.MouseEvent<HTMLButtonElement>) => void;
  index: number;
}

export default function Square({ player, onClickSquare, index }: SquareProps) {
  return (
    <Tile key={index} onClick={onClickSquare}>
      {player}
    </Tile>
  );
}
