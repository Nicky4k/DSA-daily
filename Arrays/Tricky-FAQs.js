/**
 * 1. Cut Arrays Length
 */

let arrA = [19, 82, 3, 7, 4, 62, 38, 7, 4, 69];
function trimLenght(arr) {
  arr.length = 3;
  console.log(arr);
}
// trimLenght(arrA);
// console.log(arrA); // this will have mutated value of arrA

/**
 * 2. Sum of all emements in an array
 */
function allSum(arr) {
  console.log(arr.reduce((acc, el, i, arrayA) => acc + el, 0));
}
// allSum(arrA);

/**
 * 3. Remove duplicate values from an array
 */
const arrB = [1, 2, 3, 1, 2, 3, 4];
function removeDups(arr) {
  console.log([...new Set(arr)]);
}
// removeDups(arrB);

/**
 * 4. Comma Operator
 * (operation, operation,... operations, final value that will be returned)
 */
function commaOperator() {
  let a = 10;
  a = ((a += 10), a);
  console.log(a); //20

  a = (a++, ++a, (a += 10), (a /= 10), a);
  console.log(a); //3.2

  // returns 0. as final value to be returned is hard coded.
  a = (a++, 0);
  console.log(a); //0

  a = (a, arrA);
  console.log(a);
}
// commaOperator();

/**
 * 5. Value swapping via destructurign
 */
function swapDestruct() {
  let valA = 1;
  let valB = 5;
  // without a 3rd variable
  console.log(valA, valB);
  valA = valA + valB;
  valB = valA - valB;
  valA = valA - valB;
  console.log(valA, valB);

  // Using Destructuring
  [valA, valB] = [valB, valA];
  console.log(valA, valB);

  [c, d] = [valB, valA];
  console.log(c, d);
}
swapDestruct();
