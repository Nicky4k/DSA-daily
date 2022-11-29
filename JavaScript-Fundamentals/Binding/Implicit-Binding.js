function garbageCollector() {
  var x = 10,
    z = 20;
  function gc() {
    console.log(x, z);
    console.log(z);
  }
  return gc;
}
const arr = [1, 2, 2, 3, 3, 3, 2, 2];

garbageCollector()();

var a = 10;
{
  let a = 20;
}
console.log(a);
