class Animal{
  constructor(name){
    this.name = name;
  }
  say(){
    console.log(`I am ${this.name}`)
  }
}

class Cat extends Animal{

}

class Dog extends Animal{
  /* when child has its own constructor then the instantiator is confused on which constructor to use when instantiating an object from this class, as both parent and child has their own -> ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor */

  constructor(name, breed){
    /* Using super will call the constructor of the parent */
    super(name)
    this.breed = breed;
  }

  /* Now that we have a new value added in this child class, we can override the original say method with a new one that returns both the object params */
  say(){
    console.log(`I am ${this.name} and I am a ${this.breed}`)
  }
}

const jack = new Animal('Jack');
jack.say();

const kitty = new Cat('Kitty');
kitty.say();

const jacky = new Dog('jacky', 'Doberman');
jacky.say();

