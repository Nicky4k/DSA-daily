console.log("Maze problem");

// Number of paths
function mazeCount(a, b, path) {
  if (a === 1 || b === 1) {
    return 1;
  }
  let left = mazeCount(a - 1, b);
  let right = mazeCount(a, b - 1);
  return left + right;
}
console.log("number of path: ", mazeCount(3, 3, ""));

// Down and Right movement maze
function maze(a, b, path) {
  if (a === 1 && b === 1) {
    console.log(path);
    return;
  }
  if (a > 1) {
    maze(a - 1, b, path + "D");
  }
  if (b > 1) {
    maze(a, b - 1, path + "R");
  }
}

maze(3, 3, "");

// Diagonal, Down, Right Maze
function diagonalMaze(a, b, path) {
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

console.log("number of path: ", diagonalMaze(3, 3, ""));
