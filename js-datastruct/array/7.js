let names = ['Anna', 'KK', 'anna', 'Kk'];
// 比较字符串时，根据ASCII值来比较
console.log(names.sort());

let tmp1 = names.sort((a, b) => {
  if(a.toLowerCase() < b.toLowerCase()) return -1;
  if(a.toLowerCase() > b.toLowerCase()) return 1;
  else return 0;
});

console.log(tmp1);

let tmp2 = names.sort((a, b) => {
  a.localeCompare(b);
});
console.log(tmp2);
