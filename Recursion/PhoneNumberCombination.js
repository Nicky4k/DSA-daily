function dialer(string = "", dials) {
  if (!dials) {
    return string + " ";
  }
  let digit = dials.slice(0, 1);
  let op = "";
  for (let i = (digit - 1) * 3; i < digit * 3; i++) {
    const ch = String.fromCharCode("a".charCodeAt(0) + i);
    op += dialer(string + ch, dials.slice(1));
  }
  return op;
}

console.log(dialer("", "22"));
