// Variable Hoisting
console.log(x);

var x = 3; // var will hoist the value to top of the scope, where as let and const cannot hoist

// Normal Function hoisting

sayHi();

function sayHi() {
  console.log("hello");
}

// Arrow Function Hoisting
// const out = sayHello(); // This will throw error since hoisting doesn't work on arrow functions or function expressions

const sayHello = () => "hello abhilasha";

// console.log(out);

console.log(1 > 2 > 3);
console.log(1 && 2 && 3);
console.log(false || false || 3);

var z = null;

console.log(z);
