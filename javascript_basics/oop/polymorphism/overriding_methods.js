// creating Person constructor
function Person(){
	this.name = "";
}

Person.prototype = {
	getName: function(){
		return this.name;
	}
}

// creating a Person instance
var p = new Person();
p.name = "Mathew";
console.log(p.getName());

// creating Doctor constructor
function Doctor () {
	Person.apply(this); 
}
// overriding getName method of Person prototype as Doctor 
Doctor.prototype = {
	getName: function(){
		return "Hi. This is Dr. " + this.name;
	}
}

// creating Doctor instance
var doctor = new Doctor();

doctor.name = "Lewis";
console.log(doctor.getName());
