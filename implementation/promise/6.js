console.log('1 ===> 全局队列');

setTimeout(function(){
  console.log('2 ===> timeout-1 1');
  new Promise(function(resolve){
    console.log('3 ===> timeout-1 1 promise');
    resolve();
  }).then(_ => {
    console.log('4 ===> timeout-1 1 then');
  })
}, 2000);

for(let i = 1; i <= 5; i++){
  setTimeout(_ => {
    console.log('5 ===> timeout-2 ' + i);
  }, i * 1000);
  console.log('6 ===> 全局队列 ' + i);
}

setTimeout(function(){
  console.log('7 ===> timeout-3 1');
  new Promise(function(resolve){
    console.log('3 ===> timeout-3 1 promise');
    resolve();
  }).then(_ => {
    console.log('4 ===> timeout-3 1 then');
  })
}, 2000);