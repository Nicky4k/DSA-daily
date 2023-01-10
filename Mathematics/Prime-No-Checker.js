/**
 * Sieve of Eratosthenes: finds number of prime number in a range of numbers.
 * (i*i <= n) is same as (i <= square root of n)
 */
function sieveOfErathosthenes(n) {
  const sieve = new Array(n).fill(true);
  for (let i = 2; i * i <= n; i++) {
    for (let j = 2 * i; j <= n; j += i) {
      if (j % i === 0) {
        sieve[j] = false;
      }
    }
  }
  for (i = 2; i <= n; i++) {
    if (sieve[i]) console.log(i);
  }
}
sieveOfErathosthenes(20);
