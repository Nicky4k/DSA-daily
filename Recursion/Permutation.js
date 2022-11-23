const string = "abc";
function permutation(mix, string) {
  if (!string) {
    console.log(mix);
    return;
  }
  for (let i = 0; i < mix.length + 1; i++) {
    let mixx = mix.slice(0, i) + string.slice(0, 1) + mix.slice(i);
    permutation(mixx, string.slice(1));
  }
}
permutation("", string);
