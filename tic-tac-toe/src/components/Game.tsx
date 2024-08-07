import Square from "./Square";
import { useMachine } from "@xstate/react";
import { Machine } from "../game-machine/machine";
import {
  Board,
  Box,
  Button,
  Container,
  Header,
  Main,
  SubHeader,
} from "./gameStyles";

export default function Game() {
  const [state, send] = useMachine(Machine);

  return (
    <Main>
      <Container>
        <Header>Tic - Tac - Toe Game</Header>
        <Box>
          {state.matches("playing") && (
            <SubHeader>{`${state.context.currentPlayer} Turn`}</SubHeader>
          )}
          {state.matches("won") && (
            <SubHeader>{`${state.context.winner} is the winner`}</SubHeader>
          )}
          {state.matches("draw") && <SubHeader>Draw</SubHeader>}
        </Box>
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
        <Button onClick={() => send({ type: "RESET" })}>Reset</Button>
      </Container>
    </Main>
  );
}
