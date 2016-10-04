/*
What is quasi-multiple-inheritance in Javascript?

Prototype based inheritance in Javascript does not support multiple inheritance,
therefore to support multiple inheritance we can use quasi-multiple-inheritance.

*/

// creating a person
var Person = function (name) {
  this.name = name;
  this.updateName = function(name){ this.name=name; };
}


// creating a school
var School = function (school_name) {
  this.school_name = school_name;
  this.updateSchoolName = function(school_name)
  { this.school_name=school_name; };
}

// creating a student - using quasi multiple inheritance
var Student = function (name, school) {
  Person.apply(this, [name]);  // binds Person to this of Student
  School.apply(this, [school]);  // binds School to this of Student
  // understand the differene between call and apply
}

var s = new Student("Priya", "Roots Montessori");
console.log(s);

s.updateName("Priya Sharma");
s.updateSchoolName("Kids Roots Montessori");

console.log(s);
