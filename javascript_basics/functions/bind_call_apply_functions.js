/*
The three very important functions in Javascript are call(), apply() and bind().

call - call a function on object
apply - call a function on object where arguments of the function are passed in an array

The only difference in call() and apply() is that one takes arguments separated by commas, and other as array.

bind - returns a bounded function wrt object passed. 
As it is created on a function, so it could be passed the arguments otherwise the args can be passed while calling.
*/

function add(a, b, c){
	return this.num + a + b + c;
	// what is this.num here?
	// Answer - we'll be taking this argument from an object
}

var obj1 = {
	num: 10
}

var obj2 = {
	num: 1
}

/* Use case:  call() */
var val = add.call(obj1, 1, 2, 3); // theFxnToCall.call(Object_on_which, arguments_of_theFxnToCall);
console.log("Obj1 Call: ", val);


var val = add.call(obj2, 1, 2, 3);
console.log("Obj2 Call: ", val);

/* Use case:  apply() */

var val = add.apply(obj1, [1, 2, 3]); // theFxnToCall.call(Object_on_which, [arguments_of_theFxnToCall]);
console.log("Obj1 Apply: ", val);


var val = add.apply(obj2, [1, 2, 3]);
console.log("Obj2 Apply: ", val);

/* Practical Use case of apply() - take a look a quasi inheritance as well */

console.log(Math.max.apply(null, [1, 9, 3])); 
// Math.max is a function applied to find the max of a array on null object


/* bind() function */
var person = {
	name: "Lorraine"
}

function personName(name_prefix){
	return name_prefix + this.name;
}

var naming_bind = personName.bind(person); // returns a function
var naming_bind2 = personName.bind(person, "Mrs. ");

console.log("Name Binded 2: ", naming_bind2());

console.log("Name Binded: ", naming_bind("Ms "));
console.log("Name Binded: ", naming_bind("Mrs "));























