import React from "react";
import Square from "./Square";
interface BoardProps {
  squares: string[];
  onClick: (i: number) => void;
}
// export default function Board({ squares, onClick }: BoardProps) {
//   const renderSquare = (i: number) => (
//     <Square value={squares[i]} onClickSquare={() => onClick(i)} />
//   );
//   return (
//     <div>
//       {squares.map((square, i) => (
//         <Square key={i} value={square} onClick={() => onClick(i)} />
//       ))}
//     </div>
//   );
// }
