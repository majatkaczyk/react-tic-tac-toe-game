import { createMachine } from "xstate";

type Player = "x" | "o";

interface TicTacToeContext {
  board: (Player | null)[];
  moves: number;
  currentPlayer: Player;
  winner: undefined | Player;
}

const initialContext: TicTacToeContext = {
  board: Array(9).fill(null),
  moves: 0,
  currentPlayer: "x",
  winner: undefined,
};

export const Machine = createMachine({
  initial: "playing",
  context: initialContext,
  states: {
    playing: {
      initial: "xTurn",
      always: [
        // check if win
      ],
      states: {
        xTurn: {
          // currentPlayer x
          // check if chosen square is empty
          // show x if possible
          // target oTurn if !winners
        },
        oTurn: {
          // currentPlayer o
          // check if chosen square is empty
          // show o if possible
          // target xTurn if !winner
        },
      },
    },
    gameOver: {
      states: { winner: {}, draw: {} },
      // reset
    },
  },
});
