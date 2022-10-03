class Config {
  constructor(name){
    this.name = name;
  };
  
  getName(){
    console.log(this.name);
  };
  start(){
    console.log('Execution started');
  };
  stop(){
    console.log('Execution stopped');
  };
};

const config = new Config('Abby')
Object.freeze(config);

config.start();
config.stop();

config.name = 'Dale';
config.getName(); // Still prints Abby as the object is freezed and is a singleton