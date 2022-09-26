async function getData(){
  const p = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  return p;
}
const p = getData();
console.log(p);