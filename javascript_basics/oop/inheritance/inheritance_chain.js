/*
Q1. How an object has been inherited?
*/

function Person(name){
	this.name=name;
	this.getName = function () {
		return this.name;
	}
}

var p = new Person("Jimmy");
p.setOrganisation = function (argument) {
	this.organisation = argument;
}

p.setOrganisation("Javascript");
console.log("Name: ", p.getName());
console.log("Organisation: ", p.organisation);


console.log(p.__proto__); // what is the prototype of p

console.log(p.__proto__.__proto__); // what is the prototype of Person

console.log(p.__proto__.__proto__.__proto__); // what is the prototype of Person's protype


/*
Can we inherit without using prototype property of a function object? What are the properties inherited?

Remember:
1. The methods and properties are not copied from one object to another in the prototype chain 
 — they are accessed by walking up the chain. Object then its prototype, and its parent's prototype and so on until
   it find the property or finds the null prototype.

2. Only those properties are inherited which are defined in the "prototype" property of the object. 
*/

function Student(school_name, name){
	this.school_name = school_name;
	Person.apply(this, [name]);  // binds Person to this of Student
}

var s = new Student("Roots", "Joe");
console.log(s.__proto__);
console.log(s.getName());
