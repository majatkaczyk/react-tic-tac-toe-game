# React Tic-Tac-Toe Game

This project is a Tic Tac Toe game implemented using **React**, **XState**, and **Styled Components**. Tests are written using **Jest** library. 

## Game Rules

Tic Tac Toe is a simple game where the goal is to get three of your marks in a row on a 3x3 grid. The game has the following rules:

1. The game is played on a 3x3 grid.
2. Two players take turns to place their mark ("x" or "o") in an empty square.
3. The first player to get three of their marks in a horizontal, vertical, or diagonal row wins the game.
4. If all nine squares are filled and neither player has three in a row, the game ends in a draw.

## Installation and Running

After cloning the repository install dependencies:
`npm install`

Then start the application:
`npm run start`

Open your browser and navigate to http://localhost:3000.

## Testing

The unit tests are written using the Jest library and cover various aspects of the game's logic, including state transitions and winning conditions.

To run tests, use the command: `npm run test`

## Approach

### Initial Context

The initial context defines the starting conditions of the game:

- **board**: An array representing the 3x3 grid, initialized with `null` values to indicate empty spaces.
- **moves**: A counter tracking the number of moves made, starting at `0`.
- **currentPlayer**: Indicates which player is currently taking a turn, beginning with `"x"`.
- **winner**: Tracks the winner of the game, initially set to `undefined`.

### States

Machine operates through the four states:

1. **idle**: The initial state where the game waits for the first move. It transitions to the `playing` state upon receiving the `PLAY` event.

2. **playing**: Represents active gameplay. During this state, the machine continuously checks for a winner or a draw:
   - **Winner Detection**: If a winning combination is found, the state transitions to `won`.
   - **Draw Detection**: If the board is full without a winner, the state transitions to `draw`.
   - The `PLAY` event allows players to make moves, triggering the `updateBoard` action.

3. **won**: Represents the game end when a player has won. The machine identifies and sets the winner through the `setWinner` action.

4. **draw**: Represents the game end when no winner is found, and the board is full.

### Key Logic Functions

#### Checking for a Winner

The `checkWinner` guard function evaluates the board for a winning combination. It checks predefined lines (rows, columns, diagonals) where three consecutive cells must match the same player's mark. If a match is found, the machine transitions to the `won` state.

#### Checking for a Draw

The `checkDraw` guard function check if all nine moves have been made without a winner. If the board is full and no winning combination is detected, the machine transitions to the draw state.

#### Updating a board

The updateBoard action is triggered by the PLAY event. It performs the following tasks:

- Places the current player's mark ("x" or "o") in the selected cell.
- Switches the currentPlayer to "x" or "o" after each valid move.
- Increments the move counter.

#### Reseting the game

The resetBoard action resets the game to its initial state, allowing players to start a new game. This action is triggered by the RESET event and returns all context variables (board, moves, currentPlayer, and winner) to their initial values.
