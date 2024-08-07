import { useState } from "react";
import Square from "./Square";
import { useMachine } from "@xstate/react";
import { Machine } from "../game-machine/machine";
import styled from "styled-components";
import { Board, LeftColumn, Main, RightColumn } from "./styles";

export default function Game() {
  const [state, send] = useMachine(Machine);

  return (
    <Main>
      {state.matches("gameOver") && (
        <div>
          {state.hasTag("winner") && <div>Winner: {state.context.winner}</div>}
          {state.hasTag("draw") && <div>Draw</div>}
          <button onClick={() => send({ type: "RESET" })}>Reset</button>
        </div>
      )}
      <LeftColumn>
        <Board>
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
        </Board>
      </LeftColumn>
      <RightColumn>
        <div>TIC TAC TOE Game</div>
        <div>Tick's Turn</div>
        <div>show winner if possible</div>
        <button>reset</button>
      </RightColumn>
    </Main>
  );
}
