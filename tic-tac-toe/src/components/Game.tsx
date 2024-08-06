import { useState } from "react";
import Square from "./Square";
import { useMachine } from "@xstate/react";
import { Machine } from "../game-machine/machine";

export default function Game() {
  const [state, send] = useMachine(Machine);

  return (
    <>
      {state.matches("gameOver") && (
        <div>
          {state.hasTag("winner") && <div>Winner: {state.context.winner}</div>}
          {state.hasTag("draw") && <div>Draw</div>}
          <button onClick={() => send({ type: "RESET" })}>Reset</button>
        </div>
      )}
      <div>
        {Array(9)
          .fill(null)
          .map((_, i) => i)
          .map((index) => (
            <Square
              key={index}
              index={index}
              onClickSquare={() => send({ type: "PLAY", value: index })}
              player={state.context.board[index]}
            />
          ))}
      </div>
    </>
  );
}
