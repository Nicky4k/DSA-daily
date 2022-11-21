// Q: remove a letter from word recursively

console.log("String Manipulation");
const string = "baccadealaoaoommma";

function removeA(string) {
  if (string < 2) return "";
  return string.slice(0, 1) === "a"
    ? removeA(string.slice(1))
    : string.slice(0, 1) + removeA(string.slice(1));
}

console.log(removeA(string));

const poem =
  "the apple fell from the apple tree, did you see the apple falling down the apple tree? Watching an apple fall from apple tree is amazing, as we all love apples, don't we love apple and apple trees.";
console.log(poem.split(" "));
console.log(poem.startsWith("apple"));
