function count(start, end) {
  let s =start, e = end;
  console.log(s)
  let id = setInterval(() => {
      if(s < e){
          console.log(++s);
      }
      else{
          clearInterval(id);
      }
  }, 100);
  return {
      cancel:function(){
          clearInterval(id);
      }
  }
}

let counter = count(1, 1000);
setTimeout(() => {
  counter.cancel();
}, 3000)