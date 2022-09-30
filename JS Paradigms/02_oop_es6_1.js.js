/* Create a new class using ES6 Class keyword */

class Animal{
  /* A class can hold values inside */
  name = 'kitty';
  age = 12;

  /* A class can hold methods inside */
  say(){
      console.log(`I am a ${this.name}`);
  }

  /* static methods are those that can be accessed directly from the Class without the need of instantiating an object */
  static doSomething(){
    console.log('I can do something from the class');
    console.log('I can only get my class name: ', this.name);
  }
}

/* We can instantiate and object using the class and the new keyword which calls the constructor to instantiate */
const kitty = new Animal();

/* The object has the values and methods available in the class */
kitty.say();
console.log(kitty.name, kitty.age);

Animal.doSomething();