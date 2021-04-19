
// 极简，未实现级联和catch
class MyPromise {
  onFulfilled = null;
  onRejected = null;
  state = 'pending';

  constructor(excuter) {
    excuter(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(result) {
    // 因为为异步，所以需要使用setTimeout将其推入任务队列
    setTimeout(() => {
      this.state = 'fulfilled';
      this.onFulfilled(result)
    })
  }

  reject(reason) {
    setTimeout(() => {
      this.state = 'rejected';
      this.onRejected(reason);
    })
  }

  // 注册 onFulfilled和onRejected
  then(onFulfilled, onRejected) {
    this.onFulfilled = onFulfilled;
    this.onRejected = onRejected;
  }

}

MyPromise.all = function(promises) {
  // console.log('promises : ', promises);
  let plen = promises.length;
  // console.log(plen);
  let count = 0;
  let results = [];
  return new MyPromise((resolve, reject) => {
    for(let i = 0; i < plen; i++) {
      let el = promises[i];
      el.then(res => {
        count++;
        results[i] = res;
        // console.log('all.count: ' + count + ',i' + i + '   results: ' + results);
        count === plen && resolve(results);
      }, rej => {
        reject(rej);
      })
    }
  })
}

MyPromise.race = function(promises) {
  // let plen = promises.length;
  let done = false;
   return new MyPromise((resolve, reject) => {
     promises.forEach((el, idx) => {
       el.then(res => {
         !done && resolve(res);
         done = true;
       }, rej => {
         !done && reject(rej);
         done = true;
       })
     })
   })
}



let p1 = new MyPromise((resolve, reject) => {
  console.log('hello, promise1');
  resolve('I\'m resolve1');
});
let p2 = new MyPromise((resolve, reject) => {
  console.log('hi, promise2.');
  reject('I\'m reject2');
});
let p3 = new MyPromise((resolve, reject) => {
  console.log('hi, promise3.');
  resolve('I\'m resolve3');
});
let p4 = new MyPromise((resolve, reject) => {
  console.log('hi, promise4.');
  resolve('I\'m resolve4');
});

// p1.then((res) => {
//   console.log(res);
// });

p2.then(() =>{}, (err) => {
  console.log(err);
})

// p3.then((res) => {
//   console.log(res);
// }, rej => {
//   console.log(rej);
// })

MyPromise.all([p3, p4]).then(res => {
  console.log('mypromise.all resolve ---> ', res);
}, rej => {
  console.log('mypromise.all reject ---> ', rej)
});

MyPromise.race([p1, p2]).then(res => {
  console.log('mypromise.race resolve ---> ', res);
}, rej => {
  console.log('mypromise.race reject ---> ', rej);
})