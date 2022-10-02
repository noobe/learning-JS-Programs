/* Give an object with key values where the value could be another object, convert it to an object without nesting */

var person = {
  "name":"Ram",
  "age":27,
  "vehicles": {
     "car":"limousine",
     "bike":"ktm-duke",
     "plane":"lufthansa"
  }
}

const flattener = obj => {
    return Object.keys(obj).reduce((acc, item) => {
        if(typeof obj[item] === 'object') {
            acc = {
                ...acc,
                ...obj[item],
            }
        } else {
            acc[item] = obj[item];
        }
        return acc;
    }, {});
}

flattener(person);