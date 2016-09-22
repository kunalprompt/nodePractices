/*
How to define a function in Javascript?
1. Simplest way to define a function
2. Anonymous Function definition
*/

function hello(firstName, lastName) {
  console.log("Hi! " + firstName + " " + lastName);
}

hello("User", "Name");

/*
How to define a function with default arguments?
Function's definition doesnot have any name, hence it is called
Anonymous function.
*/

var add = function (number, other=0){
  return number+other;
}

console.log(add(5));
console.log(add(5, 4));
