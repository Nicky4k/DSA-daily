// Q1: remove a letter from word recursively

console.log("String Manipulation");
const string = "baccadealaoaoommma";

function removeA(string) {
  if (string < 2) return "";
  return string.slice(0, 1) === "a"
    ? removeA(string.slice(1))
    : string.slice(0, 1) + removeA(string.slice(1));
}

console.log(removeA(string));

// Q2: Skip a string only of the further string is a superset of given string, skip only app, dont skip app if further in the string app is apple. 1. ajsaapple- dont skip this app 2. aslkfappex- skip this app.

const str = "apxappletreeapp-applz-apppp-aaappapple";

function skipAppNotApple(string) {
  if (string < 2) return "";
  return string.startsWith("app") && !string.startsWith("apple")
    ? skipAppNotApple(string.slice(3))
    : string.slice(0, 1) + skipAppNotApple(string.slice(1));
}

console.log(skipAppNotApple(str));
