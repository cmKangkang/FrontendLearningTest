function functionFunction(str) {
  return function(){
      return str + ', ' + arguments[0];
  }
}

console.log(functionFunction('Hello')('world'))
