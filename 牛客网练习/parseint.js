function parse2Int(num){
  let reg = /^(\d+)\w*/;
  let tmp = num.match(reg);
  console.log(tmp);
  let res = tmp[1];
  return Number(res);
}
console.log(parse2Int('12.1px'));
console.log(parse2Int('09x12'))
// console.log(parse2Int())

