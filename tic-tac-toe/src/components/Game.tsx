import { useState } from "react";
import Square from "./Square";
import { useMachine } from "@xstate/react";
import { Machine } from "../game-machine/machine";

export default function Game() {
  const machine = useMachine(Machine);
  console.log(machine);
  return (
    <>
      {Array(9)
        .fill(null)
        .map((index) => (
          <Square
            key={index}
            index={index}
            onClickSquare={() => {}}
            player="x"
          />
        ))}
    </>
  );
}
