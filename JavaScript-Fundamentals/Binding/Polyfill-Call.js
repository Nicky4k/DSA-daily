const legs = {
  day: "Monday",
  target: "Legs",
  sets: 4,
  reps: 12,
};

const workout = function (x) {
  console.log(`${this.day}: ${this.target} - ${this.sets} X ${this.reps}`, x);
};

workout.call(legs, "-x-");

Function.prototype.myCall = function (context = {}, ...params) {
  if (typeof context !== "object") return console.error("syntax error");

  context.func = this;
  context.func(...params);
};
workout.myCall(legs, "-x-");
