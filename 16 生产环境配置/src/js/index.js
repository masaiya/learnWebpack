// import '../css/index.css'
const add = function add(x, y) {
  return x + y;
}; // ignore

console.log(add(10, 1000));
const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log('执行定时器');
  }, 1000);
  resolve();
}); 

// ignore
console.log("1111111");
console.log(promise);
