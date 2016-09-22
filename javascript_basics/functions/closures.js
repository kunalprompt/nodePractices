/*
Closure Functions

Closures are also functions but enables abstraction.

A closure lets you associate some data (the environment)
with a function that operates on that data.
This has obvious parallels to object oriented programming,
where objects allow us to associate some data (the object's properties)
 with one or more methods.
*/

// Example 1
function multiplier(multiply){
  function inner(number){
    return multiply*number;
  }
  return inner;
}

var multiples = multiplier(5);
console.log(multiples(2));
console.log(multiples(3));

// http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
