// creating a class or prototype using object literal
var Fruit = {
	vegetarian: true
	, color: null
	, getColor: function(){
		return this.color;
	}
	, setColor: function(color){
		this.color = color;
	}
}

// creating an instance of Fruit class 
var mango = Object.create(Fruit);
// hierarchy:  mango ---> Object.prototype ---> null

console.log(typeof mango);
console.log(mango.vegetarian);
console.log(mango.getColor());

mango.color = "yellow";
console.log(mango.getColor());
