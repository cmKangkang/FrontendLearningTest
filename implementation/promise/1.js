function promise(resolve, reject){
  let timeOut = Math.random() * 2;
  console.log('set timeout to:' + timeOut + 'seconds.');
  setTimeout(function(){
    if(timeOut < 1){
      console.log('call not resolve');
      resolve('200 ok');
    }
    else{
      console.log('call reject');
      reject('timeout in ' + timeOut + 'seconds.');
    }
  }, timeOut * 1000);
}

var mp = new Promise(promise);
let p1 = mp.then(function(res){
  console.log('成功：' + res);
}).catch(function(rea){
  console.log('失败：' + rea);
})