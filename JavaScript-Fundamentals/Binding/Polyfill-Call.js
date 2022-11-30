console.log("Call-Polyfill");

const legs = {
  day: "Monday",
  target: "Legs",
  sets: 4,
  reps: 12,
};

const workout = function () {
  console.log(`${this.day}: ${this.target} - ${this.sets} X ${this.reps}`);
};

workout.call(legs);

Function.prototype.myCall = function (params) {
  //   console.log(params);
  //   console.log(this);
  const newThis = this;
  return newThis();
};
workout.myCall(legs);
