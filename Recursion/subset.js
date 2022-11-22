console.log(
  "Subset approach, thinking: what to do, then how to do, draw recursive tree"
);

// Q1: find all the subsets of given string
const string = "abc";

function subsetGenerator(string, subset = "") {
  if (string === "") return subset && console.log(subset);

  let left = subsetGenerator(string.slice(1), subset + string.slice(0, 1));
  let right = subsetGenerator(string.slice(1), subset);
}

subsetGenerator(string);

// using tail to head recursion
function subsetGeneratorReturnTtoH(string, subset = "") {
  if (string === "") {
    let str;
    str += subset;
    return subset;
  }

  let left = subsetGeneratorReturnTtoH(
    string.slice(1),
    subset + string.slice(0, 1)
  );
  let right = subsetGeneratorReturnTtoH(string.slice(1), subset);

  right && (left = left + ", " + right);
  return left;
}

console.log(subsetGeneratorReturnTtoH(string));
