// Q1: Move all the zeroes to the end of an array.

function moveZeroes(array) {
  let length = array.length;
  let count = 0;
  for (let i = 0; i < length; i++) {
    if (array[i] !== 0) {
      array[count++] = array[i];
    }
  }
  while (count < length) {
    array[count++] = 0;
  }
  return array;
}
const array = [0, 0, 0, 0, 5, 0, 0, 0, 5, 6, 0, 77, 12, 38, 90, 9, 0, 0];
console.log(moveZeroes(array));
