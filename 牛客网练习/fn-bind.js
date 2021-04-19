function speak(fn, obj) {
  return fn.call(obj);
}

function fn(){
  return this.greeting + ', ' + this.name + '!!!';
}

let obj = {greeting: 'Hello', name: 'Rebecca'}

console.log(speak(fn, obj));