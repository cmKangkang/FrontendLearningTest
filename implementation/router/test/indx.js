function solution(str){
  let reg = /[a-z]+/g;
  let words = str.match(reg);
  let res = 0;
  words.forEach(word => {
    let tmp = word.split('');
    let len = Array.from(new Set(tmp)).length;
    res = res >= len ? res : len;
  });
  return res;
}

console.log(solution('aabbcc'));
