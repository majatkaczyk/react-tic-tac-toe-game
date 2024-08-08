import { assertEvent, assign, createMachine } from "xstate";

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

export const Machine = createMachine(
  {
    initial: "idle",
    context: initialContext,
    states: {
      idle: { on: { PLAY: { target: "playing" } } },
      playing: {
        always: [
          { target: "#won", guard: "checkWinner" },
          { target: "#draw", guard: "checkDraw" },
        ],
        on: {
          PLAY: {
            target: "playing",
            guard: "checkMove",
            actions: "updateBoard",
          },
          RESET: { target: "idle", actions: "resetBoard" },
        },
      },
      won: {
        id: "won",
        entry: "setWinner",
        tags: "winner",
        on: {
          RESET: { target: "idle", actions: "resetBoard" },
        },
      },
      draw: {
        id: "draw",
        tags: "draw",
        on: {
          RESET: { target: "idle", actions: "resetBoard" },
        },
      },
    },
  },
  {
    actions: {
      resetBoard: assign(initialContext),
      setWinner: assign({
        winner: ({ context }) => (context.currentPlayer === "x" ? "o" : "x"),
      }),
      updateBoard: assign({
        board: ({ context, event }) => {
          const { board, currentPlayer } = context;
          assertEvent(event, "PLAY");
          const updatedBoard = [...board];
          updatedBoard[event.value] = currentPlayer;
          return updatedBoard;
        },
        currentPlayer: ({ context }) => {
          return context.currentPlayer === "x" ? "o" : "x";
        },
        moves: ({ context }) => {
          return context.moves + 1;
        },
      }),
    },
    guards: {
      checkMove: ({ context, event }) => {
        if (event.type !== "PLAY") {
          return false;
        }
        return context.board[event.value] === null;
      },

      checkDraw: ({ context }) => {
        const { moves } = context;
        return moves === 9;
      },

      checkWinner: ({ context }) => {
        const { board } = context;
        const winnerLines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];

        const length = winnerLines.length;

        for (let i = 0; i < length; i++) {
          const [a, b, c] = winnerLines[i];

          if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
          }
        }
        return false;
      },
    },
  }
);
