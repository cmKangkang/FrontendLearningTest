setTimeout(() => {
  console.log('宏队列 11 ');
  setTimeout(() => {
    console.log('宏队列 ' + 111);
  }, 0);
  Promise.resolve(3).then(val => {
    console.log('微队列 ' + val);
  });
}, 0);

setTimeout(() => {
  setTimeout(() => {
    console.log('宏队列 ' + 222);
  }, 6000);
  console.log('宏队列 22 ');
}, 0);

for(let i =1; i <= 5; i++){
  setTimeout(() => {
    console.log('宏队列 ' + i);
    new Promise(res => {
      console.log('promise ' + i);
      res();
    }).then(() => {
      console.log('微队列 ' + i);
    })
  }, 0);

  console.log('宏队列 script ' + i);
}

Promise.resolve(1).then(val => {
  console.log('微队列 ' + val);
})

Promise.resolve(2).then(val => {
  console.log('微队列 ' + val);
})