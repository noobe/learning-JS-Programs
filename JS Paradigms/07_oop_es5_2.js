function Animal(name) {
  this.name = name;
}

Animal.prototype.say = function() {
  console.log('My name is :', this.name);
}

function Dog(name){
  this.name = name;
}

Dog.prototype = new Animal();

const jacky = new Dog('jacky');
jacky.say();