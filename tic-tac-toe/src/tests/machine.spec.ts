import { createActor } from "xstate";
import { Machine } from "../game-machine/machine";

jest.mock("xstate", () => {
  const xstate = jest.requireActual("xstate");
  return {
    ...xstate,
    sendParent: jest.fn(),
  };
});

describe("Tic-tac-toe Game", () => {
  const actor = createActor(Machine);
  beforeEach(() => {
    actor.start();
  });

  afterEach(() => {
    actor.stop();
  });

  test("initial state should be idle", () => {
    expect(actor.getSnapshot().value).toBe("idle");
  });

  test("state should change to playing after PLAY action", () => {
    actor.send({ type: "PLAY" });
    expect(actor.getSnapshot().value).toBe("playing");
  });

  test("should update the board and switch current player", () => {
    actor.send({ type: "PLAY" });
    actor.send({ type: "PLAY", value: 0 });

    expect(actor.getSnapshot().value).toBe("playing");
    expect(actor.getSnapshot().context.board[0]).toBe("x");
    expect(actor.getSnapshot().context.currentPlayer).toBe("o");
    expect(actor.getSnapshot().context.moves).toBe(1);
  });

  test("should not allow a move on an already occupied cell", () => {
    actor.send({ type: "PLAY" });
    actor.send({ type: "PLAY", value: 0 });
    actor.send({ type: "PLAY", value: 0 });

    expect(actor.getSnapshot().context.board[0]).toBe("x");
    expect(actor.getSnapshot().context.currentPlayer).toBe("o");
    expect(actor.getSnapshot().context.moves).toBe(1);
  });

  // it works on web, but test fails :((
  test("state should change to won state and recognize a winner", () => {
    actor.send({ type: "PLAY" });
    actor.send({ type: "PLAY", value: 0 }); // x
    actor.send({ type: "PLAY", value: 3 }); // o
    actor.send({ type: "PLAY", value: 1 }); // x
    actor.send({ type: "PLAY", value: 4 }); // o
    actor.send({ type: "PLAY", value: 2 }); // x
    actor.send({ type: "PLAY", value: 5 }); // o
    // x - winner

    expect(actor.getSnapshot().value).toBe("won");
    expect(actor.getSnapshot().context.winner).toBe("x");
  });

  // it works on web, but test fails :((
  test("state should change to draw state", () => {
    actor.send({ type: "PLAY" });
    actor.send({ type: "PLAY", value: 0 }); // X
    actor.send({ type: "PLAY", value: 1 }); // O
    actor.send({ type: "PLAY", value: 2 }); // X
    actor.send({ type: "PLAY", value: 4 }); // O
    actor.send({ type: "PLAY", value: 3 }); // X
    actor.send({ type: "PLAY", value: 5 }); // O
    actor.send({ type: "PLAY", value: 7 }); // X
    actor.send({ type: "PLAY", value: 6 }); // O
    actor.send({ type: "PLAY", value: 8 }); // X

    expect(actor.getSnapshot().value).toBe("draw");
    expect(actor.getSnapshot().context.moves).toBe(9);
  });

  test("should reset the game and go back to idle state on RESET", () => {
    actor.send({ type: "PLAY" });
    actor.send({ type: "PLAY", value: 0 });
    actor.send({ type: "RESET" });

    expect(actor.getSnapshot().value).toBe("idle");
  });
});
