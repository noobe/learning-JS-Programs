const axios = require('axios');

const getData = () => {
  return new Promise((resolve, reject) => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        resolve(response.data);
      });
  })
}

getData().then(data => {
  console.log(data);
})