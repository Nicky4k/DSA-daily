console.log("Maze problem");

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
  if (a > 1) {
    diagonalMaze(a - 1, b, path + "Down ");
  }
  if (b > 1) {
    diagonalMaze(a, b - 1, path + "Right ");
  }
  if (a > 1 && b > 1) {
    diagonalMaze(a - 1, b - 1, path + "Diagonal ");
  }
}

diagonalMaze(3, 3, "");
