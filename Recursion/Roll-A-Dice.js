function roll(choices, target) {
  if (target === 0) {
    console.log(choices);
    return;
  }

  for (let i = 1; i <= 6 && i <= target; i++) {
    roll(choices + i, target - i);
  }
}
roll("", 4);
