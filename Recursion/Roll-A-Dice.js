function roll(choices, target) {
  if (target === 0) {
    return choices + " ";
  }

  let arr = "";
  for (let i = 1; i <= 6 && i <= target; i++) {
    arr += roll(choices + i, target - i);
  }
  return arr;
}
console.log(roll("", 4));
