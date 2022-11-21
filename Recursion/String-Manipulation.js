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
