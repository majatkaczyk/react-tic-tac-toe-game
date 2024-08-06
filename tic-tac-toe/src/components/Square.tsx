import React from "react";

interface SquareProps {
  value: string;
  onClickSquare: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Square({ value, onClickSquare }: SquareProps) {
  return <button onClick={onClickSquare}>{value}</button>;
}
