const timerCreator = (time, text) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(text);
      resolve();
    }, time);
  })
};

/* Without chaining - nested as before */
timerCreator(1000, 'first').then(txt => {
  console.log(txt);
  timerCreator(1000, 'second').then(txt => {
    console.log(txt);
    timerCreator(1000, 'third').then(txt => {
      console.log(txt);
      timerCreator(1000, 'fourth').then(txt => {
        console.log(txt);
      })
    })
  })
});

/* After using chainging, the nesting is removed and code looks more linear */

timerCreator(1000, 'first')
  .then(() => timerCreator(1000, 'second'))
  .then(() => timerCreator(1000, 'third'))
  .then(() => timerCreator(1000, 'fourth'))
  .then(() => timerCreator(1000, 'fifth'))
  .then(() => timerCreator(1000, 'sixth'))
  .catch(err => console.log("Error: ", err.message));
