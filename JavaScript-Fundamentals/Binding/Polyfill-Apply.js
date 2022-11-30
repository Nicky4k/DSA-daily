const chest = {
  day: "Tuesday",
  target: "Chest",
  sets: 4,
  reps: 12,
};

const workout = function (w, x, y, z) {
  console.log(
    `${this.day}: ${this.target} - ${this.sets} X ${this.reps}`,
    w,
    x,
    y,
    z
  );
};

workout.apply(chest, ["Push", "Chest", "Biceps", "Deltoids"]);

Function.prototype.myApply = function (context = {}, params) {
  if (typeof context !== "object") return console.error("syntax error");

  context.func = this;
  context.func(...params);
};
workout.myApply(chest, ["Push", "Chest", "Biceps", "Deltoids"]);
