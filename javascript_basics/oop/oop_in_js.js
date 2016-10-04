/*
Prototype based Object Oriented Programming in Javascript

In order to take advantage of OOP in Javascript, every new object is defined
from older object, and the top most object is thus Object. As the old object
serve as prototype of the new object, hence javascript is called
Prototype-based.

Each object has an internal link to another object called its prototype.

Following the ECMAScript standard, the notation someObject.[[Prototype]]
is used to designate the prototype of someObject. This is equivalent to
the JavaScript property __proto__ (now deprecated). It should not be
confused with the func.prototype property of functions, which instead
specifies the [[Prototype]] of all instances of the given function.
Since ECMAScript 6, the [[Prototype]] is accessed using the accessors
Object.getPrototypeOf() and Object.setPrototypeOf().
*/

var animal = {};  // an object

console.log(animal);

console.log(animal.prototype);  // undefined prototype

/*
Case 1 - Creating prototype with Object.create()

ECMAScript 5 introduced a new method: Object.create().
Calling this method creates a new object. The prototype of this
object is the first argument of the function.
*/
var cat = {
  isAnimal: true
};
// cat ---> Object.prototype ---> null

var brownie = Object.create(cat);
// brownie ---> cat ---> Object.prototype ---> null
brownie.name = "brownie";
console.log(brownie, brownie.name, brownie.isAnimal);

/*
Case 2 - Creating prototype with Constructor Function
*/
function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function(v){
    this.vertices.push(v);
  }
};

var g = new Graph();
// g is an object with own properties 'vertices' and 'edges'.
// g.[[Prototype]] is the value of Graph.prototype
// when new Graph() is executed.
g.addVertex([1,3]);
console.log(g);
