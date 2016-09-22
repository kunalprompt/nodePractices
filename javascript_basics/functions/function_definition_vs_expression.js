/*
What is the diference between a function definition and
function expression?
*/


// A Function Declaration defines a named function variable
// without requiring variable assignment.
function sayHi(name){
  return "Hi "+ name;
}
console.log(sayHi("Indi"));

// A function expression can be stored in a variable
var sayHello = function (name){
  return "Hello " + name;
}

console.log(sayHello("Maxis"));
