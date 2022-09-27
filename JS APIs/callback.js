function newFn (cb) {
  console.log('Parent function');
  cb();
}

newFn(function(){ console.log('callback function')});

/* JS is a functional programming language with 1st class functions. Functions can be passed as value inside variables, then can be passed as params into a function as well as retuned as return value

We use this behaviour to pass a function into another function and invoke it when some conditions are met.
*/

function onTimeOut(){
  console.log('Time has ran out')
}

setTimeout(onTimeOut, 1500);

/* JS handles async operations in this manner. It accepts a callback function and triggers the async operation. When it recieves the interupt for completion of the operation, it invokes the callback function we provided it earlier. */