let attack = [1, 8, 3];
let money = [1, 8, 5];

let n = 3;
let k = 1;

attack.map((at, idx, arr) => {
  let tmp = [];
  arr.forEach((e, idx) => {
    if(at > e) {
      tmp.push(idx);
    }
  });
  let mon = [];
  tmp.forEach((e) => {
    mon.push(money[e]);
  })
  mon.sort((a, b) => {
    return b - a; 
  })
  let num = k;
  let res = 0;
  for(let i =0; i < mon.length; i++) {
    if(num < 1) break;
    num --;
    res += mon[i];
  }
  console.log(res);
})