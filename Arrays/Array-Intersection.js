const arrA = [1, 2, 3, 4, 5, 6, 7];
const arrB = [2, 5, 7, 8, 9, 10];

function intersections(arrA, arrB) {
  const obj = {};
  arrA.forEach((el) => {
    if (!obj[el]) {
      obj[el] = 1;
    }
  });
  arrB.forEach((el) => {
    if (obj[el]) {
      console.log(el);
    }
  });
}
intersections(arrA, arrB);
