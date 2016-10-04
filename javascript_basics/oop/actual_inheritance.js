/*
How does inheritance work in Javascript?

species -> animal -> cat
*/

var species = {};

// prototype based inheritance from species
var animal = Object.create(species);

animal.prototype = {
  isAnimal: true
};

// prototype based inheritance from animal
var cat = Object.create(animal);

cat.name = "brownie";  // Setting a property

cat.updateName = function(name){  // Setting a method
  this.name = name;
}

console.log(cat);
cat.updateName("kitty");
console.log(cat);
