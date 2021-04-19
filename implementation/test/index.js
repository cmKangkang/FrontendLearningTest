var a = 100;
function demo(e){
  function e(){};
  console.log(e);
  arguments[0] = 1;
  console.log(e);
  a = 300;
  b = 3;
  if(b){
    a=200;
  }
  // let b;
  console.log(a);
  var a;
  console.log(a)
}

demo(3);