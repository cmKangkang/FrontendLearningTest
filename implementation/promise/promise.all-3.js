// promise.all 返回一个promise对象，通过then访问其执行结果，
// 所以内部必须返回一个Promise，且执行函数中有resolve

// 参见1、2、3
Promise.myall = function(promises){
  let count = 0;
  let plength = promises.length;
  let results = [];
  // 1. 返回Promise
  return new Promise(function(resolve, reject){ // 2. 执行函数
    promises.forEach((el, idx) => {
      // promise。resolve接收一个promise时
      Promise.resolve(el).then(function(res){
        count++;
        results[idx] = res;
        
        if(count === plength){
          resolve(results);  // 3. 执行函数的resolve，把结果往外传，供给Promise.all.then作为注册函数的参数，并在其中访问
        }

      }).catch(function(err){
        reject(err);
      })
    });
  })
}


// test

let promise1 = new Promise(function(resolve) {
  resolve(1);
});
let promise2 = new Promise(function(resolve) {
  resolve(2);
});
let promise3 = new Promise(function(resolve) {
  resolve(3);
});

let promiseAll = Promise.myall([promise1, promise2, promise3]);
promiseAll.then(function(res) {
  console.log(res);
});
