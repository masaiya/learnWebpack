console.log("index.js 文件被加载了");

document.getElementById('btn').onclick = function() {
  import('./test').then(({mul}) => {
    console.log(mul(77,11));
  })
};