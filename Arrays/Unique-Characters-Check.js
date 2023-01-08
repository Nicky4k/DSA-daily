const arr = ["a", "b", "c", "d", "a"];

function uniqueCharactersTest(arr) {
  const obj = {};
  for (i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      console.log(false);
      return;
    } else {
      obj[arr[i]] = 1;
    }
  }
  console.log(true);
}
uniqueCharactersTest(arr);
