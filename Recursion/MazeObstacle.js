// Diagonal, Down, Right Maze
function diagonalMaze(a, b, path) {
  if (a === obstacle[0] && b === obstacle[1]) return 0;
  if (a === 1 && b === 1) {
    console.log(path);
    return 1;
  }
  let left = 0;
  let right = 0;
  let diag = 0;
  if (a > 1) {
    left = diagonalMaze(a - 1, b, path + "Down ");
  }
  if (b > 1) {
    right = diagonalMaze(a, b - 1, path + "Right ");
  }
  if (a > 1 && b > 1) {
    diag = diagonalMaze(a - 1, b - 1, path + "Diagonal ");
  }
  return left + right + diag;
}
const obstacle = [2, 3];
console.log("number of path: ", diagonalMaze(3, 3, ""));
