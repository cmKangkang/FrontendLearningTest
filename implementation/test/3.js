let str = '1111000011001';
let reg = /(1+)/g;

let res = str.match(reg);
console.log(res);

// let i = str.length;
let p1 = 'Niumei',
    p2 = 'Niuniu';
let s1 = 0,
    s2 = 0;
let count = 0; // count为偶数时轮到niu'mei
while(str.length > 0) {
  let tmp = str.match(reg);
  let maxlen = 0;
  let index;
  tmp.forEach((el, idx) => {
    if(el.length > maxlen) {
      maxlen = el.length;
      index = idx;
    }
  });
  // 修改字符串
  // let s = /

  if(count === 0) {
    count = 1;
    s1 += maxlen;
  } else {
    count = 0;
    s2 += maxlen;
  }

}
