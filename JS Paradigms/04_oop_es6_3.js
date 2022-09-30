class Animal{
  constructor(name){
    this.name = name;
  }
  say(){
    console.log(`I am ${this.name}`)
  }
}

/* We can create a inherited child class for Animal class using extends keyword */
class Dog extends Animal{

}

const kitty = new Animal('kitty');
kitty.say();

/* The child class inherits from the parent and even the construcotor behaves the same */
const jacky = new Dog('jacky');
jacky.say();

