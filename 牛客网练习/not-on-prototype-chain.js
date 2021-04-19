function iterate(obj) {
  let res = [];
  for(let key in obj){
    // 用 hasOwnProperty判断属性是否是对象自身属性，（不在原型链上的属性）
      if(obj.hasOwnProperty(key)) {
          let tmp = key + ': ' + obj[key];
          res.push(tmp);
      }
  }
  return res;
}

function containsNumber(str) {
  let reg = /.\d+./;
  return reg.test(str);
}

console.log(containsNumber('123jcjdic'));
console.log(/[a-zA-Z]/.test('a'));

str = 'jbndxcbh123456kdi223';
let reg = /\d{3}/;
console.log(str.match(reg));
console.log('djiadjna12ndd'.match(reg));

let reg1 = /^\$(([1-9]\d{0,2}(,\d{3})*)|0)(\.\d{2})?$/;
console.log(reg1.test('$123.03'))