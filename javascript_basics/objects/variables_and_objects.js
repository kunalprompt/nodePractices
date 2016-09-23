/*
What are objects and how they are different from variables?

Javascript Primitive Variables:
Anything defined with Primitives in Javascript is not an object.
strings ("John Doe"), numbers (3.14), true, false, null, and undefined

Javascript objects:
Almost everything is an object in Javascript other than Primitives.
However a notable difference is that a String, Number, Boolean can be
defined as object.

A JavaScript object is a collection of named values, and these named values
are called as Properties.

Example: an array, an JSON object, a function all are objects.
*/

var n = 10;  // a number variable
var b = true;  // a boolean variable
var s = "My India.";  // a string variable

console.log(typeof n, n);
console.log(typeof b, b);
console.log(typeof s, s);

var num = new Number(10); // a number object
var bool = new Boolean(true); // a boolean object
var st = new String("I love my India.");  // a string object

console.log(typeof num, num);
console.log(typeof bool, bool);
console.log(typeof st, st);

// variable Vs Object
n.x = 20;
console.log(typeof n, n.x);  // output will be undefined

num.description = "I am a number object";
console.log(typeof num, num);  // see the differene now
