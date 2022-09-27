(function onTimeout(){
  setTimeout(() => {
    console.log(`First`);
    setTimeout(() => {
      console.log(`Second`);
      setTimeout(() => {
        console.log(`Third`);
        setTimeout(() => {
          console.log(`Fourth`);
          setTimeout(() => {
            console.log(`Fifth`);
            setTimeout(() => {
              console.log(`Sixth`);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
})();

/* This code works. And similarly does any other async operation */