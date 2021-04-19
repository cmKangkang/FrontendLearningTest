const p1 = new Promise((resolve, reject) => {
  resolve('p1');
});

const p2 = new Promise((resolve, reject) => {
  resolve('p2');
});

const p3 = new Promise((resolve, reject) => {
  resolve('p3');
});

let arr = [];

Promise.all([p1, p2, p3]).then(data => { 
  console.log(data); // ['p1', 'p2', 'p3'] 结果顺序和promise实例数组顺序是一致的，一起执行后，将参数组成数组传入
  arr.push(data);
}, err => {
  console.log(err);
}).then(_ => {
  console.log(arr);
})
