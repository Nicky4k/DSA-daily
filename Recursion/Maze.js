console.log("Maze problem");

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
  path = "";
}
maze(3, 3, "");
