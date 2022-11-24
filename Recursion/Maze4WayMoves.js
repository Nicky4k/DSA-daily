// Diagonal, Down, Right Maze with obstacle
function diagonalMaze(a, b, board, path) {
  // obstacle check
  if (!board[a][b]) return 0;

  if (a === board.length - 1 && b === board[0].length - 1) {
    console.log(path);
    return 1;
  }

  let left = 0;
  let right = 0;
  let diag = 0;
  let up = 0;
  let down = 0;

  // Backtracking
  board[a][b] = false;

  if (a > 0) {
    up = diagonalMaze(a - 1, b, board, path + "Up ");
  }
  if (a < board.length - 1) {
    down = diagonalMaze(a + 1, b, board, path + "Down ");
  }
  if (b < board[0].length - 1) {
    right = diagonalMaze(a, b + 1, board, path + "Right ");
  }
  if (b > 0) {
    left = diagonalMaze(a, b - 1, board, path + "Left ");
  }
  if (a < board.length - 1 && b < board[0].length - 1) {
    diag = diagonalMaze(a + 1, b + 1, board, path + "Diagonal ");
  }

  // Backtracking
  board[a][b] = true;

  return left + right + up + down + diag;
}
const board = [
  [true, true, true],
  [true, true, false],
  [true, true, true],
];
console.log("number of path: ", diagonalMaze(0, 0, board, ""));
