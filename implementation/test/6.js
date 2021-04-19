Promise.myAll = function(promises) {
  let len = promises.length;
  let count = 0;
  let results = [];
  console.log(promises);
  return new Promise((resolve, reject) => {
    promises.forEach((el, idx) => {
      el.then(res => {
        count ++;
        results[idx] = res;
        count === len && resolve(results);
      }).catch(rej => {
        reject(rej);
      })
    })
  })
};

let getPromise = function(i) {
  return new Promise(res => {
    res(i);
  });
}

let getTimerPromise = function(i) {
  return new Promise(res => {
    setTimeout(() => {
      res(i);
    }, i * 1000);
  })
}

Promise.myRace = function(promises) {
  let done = false;
  return new Promise((resolve, reject) => {
    promises.forEach((el) => {
      el.then(res => {
        !done && resolve(res);
        done = true;
      }).catch((rej) => {
        !done && reject(rej);
        done = true;
      })
    })
  })
}

let all = Promise.myAll([getPromise(1), getPromise(2), getPromise(3)]);
all.then(res => {
  console.log(res);
})

let race = Promise.myRace([getTimerPromise(4), getTimerPromise(5), getTimerPromise(6)]);
race.then(res => {
  console.log(res);
}).catch(rej => {
  console.log(rej);
})