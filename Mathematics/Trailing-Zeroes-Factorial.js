function factorial(n) {
  let fact = 1;
  for (n; n > 0; n--) {
    fact *= n;
  }
  console.log(fact);
}
factorial(20);

function zeroTrails(n) {
  let zeroes = 0;
  for (let i = 5; i <= n; i *= 5) {
    zeroes += Math.floor(n / i);
  }
  console.log(zeroes);
}
zeroTrails(5);
