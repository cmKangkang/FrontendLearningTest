Promise.myrace = function(promises) {
  function isPromise(x) {
    if((typeof x==='object' && x!=null) || typeof x==='function'){
      if(typeof x.then =='function'){
          return true;
      }
  }
  return false;
  }

  let plength = promises.length;
  return new Promise((resolve, reject) => {
    for(let i = 0; i < plength; i++) {
      let promise = promises[i];
      if(isPromise(promise)) {
        promise.then(res => {
          resolve(res);
        }, err => {
          reject(err);
        })
      }
      else{
        resolve(value);
      }
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

// 谁先就取谁的值，但其他的还是会执行
Promise.myrace([promise1, promise2, promise3]).then(res => {
  console.log(res);
})

