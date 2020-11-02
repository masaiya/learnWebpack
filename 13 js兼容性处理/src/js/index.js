import '@babel/polyfill';

const add = function add(x, y) {
  return x + y;
}; // eslint-disable-next-line

console.log(add(10, 1000));
const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log('定时器执行了~');
    resolve();
  }, 1000);
});
console.log(promise);
