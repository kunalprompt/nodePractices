/*
Why there exists new keyword in Javascript?

1. It creates a new object. The type of this object, is simply object.

2. It sets this new object's internal, inaccessible, [[prototype]]
(i.e. __proto__) property to be the constructor function's external,
accessible, prototype object (every function object automatically
has a prototype property).

3. It makes the this variable point to the newly created object.

4. It executes the constructor function, using the newly created
object whenever this is mentioned.

5. It returns the newly created object, unless the constructor
function returns a non-null object reference. In this case,
that object reference is returned instead.
*/

var student = function (name){
  this.name = name;
}

console.log(student("Wanderer")); // undefined because student is called like
// a function rather than an object

var s = new student("Roxo");
console.log(s.name);  // now s is a student object and has name as a property

console.log(s instanceof Object);

console.log(student.prototype);
