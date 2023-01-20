// Closure Basics
var x = 3;

function first() {
  const a = 1;
  console.log(a);
  function second() {
    console.log(a);
  }
  second();
}
first();
