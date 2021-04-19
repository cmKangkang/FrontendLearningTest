Promise.all = function(promises){
  let res = [];
  return new Promise(function(resolve){
    promises.forEach(function(val){
      val.then(function(re){
        res.push(re);
      });
    });
    resolve(res);
  })
}

let promise1 = new Promise(function(resolve) {
  resolve(1);
});
let promise2 = new Promise(function(resolve) {
  resolve(2);
});
let promise3 = new Promise(function(resolve) {
  resolve(3);
});

let promiseAll = Promise.all([promise1, promise2, promise3]);
promiseAll.then(function(res) {
  console.log(res);
});