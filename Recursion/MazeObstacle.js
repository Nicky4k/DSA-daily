// Diagonal, Down, Right Maze with obstacle
function diagonalMaze(a, b, board, path) {
  if (!board[a][b]) return 0;

  if (a === board.length - 1 && b === board[0].length - 1) {
    console.log(path);
    return 1;
  }

  let left = 0;
  let right = 0;
  let diag = 0;

  if (a < board.length - 1) {
    left = diagonalMaze(a + 1, b, board, path + "Down ");
  }
  if (b < board[0].length - 1) {
    right = diagonalMaze(a, b + 1, board, path + "Right ");
  }
  if (a < board.length - 1 && b < board[0].length - 1) {
    diag = diagonalMaze(a + 1, b + 1, board, path + "Diagonal ");
  }

  return left + right + diag;
}
const board = [
  [true, true, true],
  [false, false, true],
  [false, true, true],
];
console.log("number of path: ", diagonalMaze(0, 0, board, ""));
