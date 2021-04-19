Promise.myall = function(promises){
  let results = [];
  let promiseCount = 0; //记录promise执行的个数，达到数目则返回结果
  let PromisesLength = promises.length;
  return new Promise(function(resolve, reject){
    for(let i = 0; i < PromisesLength; i++){
      let promise = promises[i];
      Promise.resolve(promise).then(function(res){
        promiseCount++;
        results[i] = res; // 建议不要使用res.push，因为要保证结果的输出顺序与输入顺序一致
        if(promiseCount === PromisesLength){
          return resolve(results);
        }
      }, function(err){
        return reject(err);
      })
    }
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

let promiseAll = Promise.myall([promise1, promise2, promise3]);
promiseAll.then(function(res) {
  console.log(res);
});
