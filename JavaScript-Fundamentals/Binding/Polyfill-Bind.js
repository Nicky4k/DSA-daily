const subject = {
  name: "CSS",
  topic: "Box-Model",
};

const subPrint = function (difficulty, lectures, duration) {
  console.log(
    " Name:",
    this.name,
    "\n",
    "Topic:",
    this.topic,
    "\n",
    "Difficulty:",
    difficulty,
    "\n",
    "Lectures:",
    lectures,
    "\n",
    "Duration:",
    duration,
    "hrs"
  );
};
const details = subPrint.bind(subject, "Medium");
details(118, 16.4);

Function.prototype.newPrinter = function (...params) {
  const polyThis = this;
  return function (...args) {
    polyThis.apply(params[0], [...params.slice(1), ...args]);
  };
};

const polyDetails = subPrint.newPrinter(subject, "Easy");
polyDetails(92, 18.2);
