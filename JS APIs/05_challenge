const axios = require('axios');

const findAllCustomerData = async (baseURL) => {
  const users = await axios.get(`${baseURL}/users`);
  const dataPromises = users.data.map(user => {
    return axios.get('users/' + user.id, { baseURL: baseURL });
  });
  const userData = await Promise.all(dataPromises);
  return userData.map(result => {
    return result.data;
  });
}

(async () => {
  var baseURL = 'https://jsonplaceholder.typicode.com';
  try {
    const users = await findAllCustomerData(baseURL);
    users.forEach(user => {
      console.log(user.username);
    });
  } catch(e) {
    console.log(e)
  }
})();