/*
DP that ensures that only one instance of a class exists at all time
Hence it consists of an object that can not be further modified.
*/

const config = {
  name: 'Abby',
  getName(){
    console.log(this.name);
  },
  start(){
    console.log('Execution started');
  },
  stop(){
    console.log('Execution stopped');
  }
};

Object.freeze(config);

config.start();
config.stop();

config.name = 'Dale';
config.getName(); // Still prints Abby as the object is freezed and is a singleton