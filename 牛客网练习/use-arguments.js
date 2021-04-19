function useArguments() {
  // console.log(arguments);

  return Array.from(arguments).reduce((total, el) => {
      return total + el;
  }, 0)
  
}
console.log(useArguments(1,2,3,4));

function callIt(fn) {
  let args = [];
  for(let key in arguments){
      if(key !== '0'){
        console.log(arguments[key]);
          args.push(arguments[key]);
      }
  }
  return fn(...args);
}

function partialUsingArguments(fn) {
  let args = [];
  for(let key in arguments){
      if(key !== '0'){
        console.log(arguments[key]);
          args.push(arguments[key]);
      }
  }
  return function(){
    let fargs = Array.from(arguments);
    // console.log(fargs);
    return fn(...args, ...fargs);
  }
}

function test() {     
  var a = 1;     
  var b = 2;     
  var c = 3;     
  var d = 4;     
  var test = function (first, second, third, forth) {         
    return first + second + third + forth;     
  };      
  return partialUsingArguments(test, a, b)(c, d); 
}

console.log(test());
