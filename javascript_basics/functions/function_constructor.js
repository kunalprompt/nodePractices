/*
How do we define function with Function constructor in Javascript?
*/

var sayName = new Function("name", "return 'Hi ' + name");

console.log(sayName("User"));
