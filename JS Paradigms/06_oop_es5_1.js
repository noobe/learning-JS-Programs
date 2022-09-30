function Animal(name){
  this.name = name;
}

Animal.prototype.say = function(){
  return this.name;
}

/* In ES5 we create objects out of functions. The key was the usage of new keyword. Without it, it will be treated as invoking a normal function. But with it, it uses the Animal function to create an object and inside it, the this will point to the instance */
const kitty = new Animal('kitty');
kitty.say();