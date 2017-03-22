// creating constructor Employee for a class
function Employee(ecode, name){
	this.organisation = "Javascript";
	this.ecode = ecode;
	this.name = name;
}

// creating prototype of class Employee - Protypical Object Oriented Programming
Employee.prototype = {
	constructor: Employee
	, setDepartmentTeam: function(dept, team){
		this.dept = dept
		, this.team=team;
	}
}

// creating instance of the class Employee
var e = new Employee("uc1", "Lukas");
// new keyword plays important role here 

console.log(e.ecode, e.name, e.organisation);