import { useState } from "react";
import Square from "./Square";
import { useMachine } from "@xstate/react";
import { Machine } from "../game-machine/machine";
import {
  BigContainer,
  Board,
  Button,
  Container,
  Header,
  LeftColumn,
  Main,
  RightColumn,
  SubHeader,
} from "./gameStyles";

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
        <Container>
          {state.matches("playing") ? (
            <Header>{`${state.context.currentPlayer} Turn`}</Header> //better if x / o change to tick / tack
          ) : (
            <div>show winner if possible</div>
          )}
        </Container>

        {/* change to winner */}
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
        <BigContainer>
          <div>
            <Header>TIC TAC TOE Game</Header>
            <SubHeader>
              The player who places three of their marks in a horizontal,
              vertical, or diagonal row is the winner.
            </SubHeader>
          </div>

          <Button>reset</Button>
        </BigContainer>
      </RightColumn>
    </Main>
  );
}
