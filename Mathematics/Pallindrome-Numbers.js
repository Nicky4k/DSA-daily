/**
 * Check whether a number is pallindrome or not
 * @param {*} num
 */
function numberPallindromeChecker(n) {
  let revs = 0;
  for (let i = 10; i < n * 10; i *= 10) {
    revs = revs * 10 + Math.floor(((n % i) / i) * 10);
  }
  console.log(n === revs ? "true" : "false");
}
numberPallindromeChecker(1);
