const str = "DSA Daily Jan Feb for the Win";

/**
 * 1. strings to array
 * => split: doesn't mutate the original string
 */

function str2Arr(str) {
  console.log(str.split());
  console.log([str]);
  console.log([...str]);
  console.log(str.split(""));
  console.log(str.split(" "));
  console.log(str.split("a"));
}
// str2Arr(str);

/**
 * 2. replace any characters
 * => replace, replaceAll: doesn't mutate the original string
 * use RegEx to make replace more powerful
 * /string/g: global- for all occurances
 * /string/i: i makes case insensitive
 */

function strReplace(str) {
  console.log(str.replace("a", "*A*"));
  console.log(str.replaceAll("a", "*A*"));
  console.log(str.replace(/[nabcd]/gi, "+"));
}
// strReplace(str);

/**
 * 3. substring from string
 * slice: : doesn't mutate the original string
 * substring: : doesn't mutate the original string
 */

function getSubStr(str) {
  console.log(str.slice(0, -3).slice(3));
  console.log(str.slice(6, 10));
  console.log(str.substring(2, 9));
  console.log(str.substring(1));
  console.log(str.substring(0, str.indexOf("J")));
  console.log(str.substring(0, str.lastIndexOf(" ")));
}
// getSubStr(str);

/**
 * reverse a string: split > reverse > join
 */
function reverseStr(str) {
  console.log(str.split("").reverse().join(""));
  console.log(str.split(" ").map((word) => word.split("").reverse().join("")));
}
// reverseStr(str);

/**
 * trim a string: remove white spaces from start, end, both.
 */
const noPadStr = "     abc  xyx      ";
function trimmers(noPadStr) {
  console.log(noPadStr);
  console.log(noPadStr.trim());
  console.log(noPadStr.trimStart());
  console.log(noPadStr.trimEnd());
}
// trimmers(noPadStr);

/**
 * concat 2 strings
 */
function concats(str1, str2) {
  console.log(str1.concat(str2));
}
// concats(noPadStr, str);
