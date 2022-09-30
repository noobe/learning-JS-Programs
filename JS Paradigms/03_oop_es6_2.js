/* A constructor is a function inside a class that helps initialize object values during instanciation. A class can only have 1 such constructor method or we get -> SyntaxError: A class may only have one constructor */

class Animal{
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  say(){
    console.log('The object values are:', this.name, this.age);
  }
}

/* Only with a constructor explicity defined can the param passed during object creation be used during instantiation */
const kitty = new Animal('kitty', 12);
kitty.say();