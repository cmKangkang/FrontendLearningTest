async function timeout(){
  console.log('hello, timer');
  return 'hello world';

}

console.log(timeout().then(data => { // then获取promise返回值
  console.log(data);
}));
console.log("虽然我在异步之后，但我执行在异步之前，因为我是全局scripts，而异步是微任务");
