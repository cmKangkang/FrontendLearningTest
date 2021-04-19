function dashToHump(dash){
  let words = dash.split(/-+/);
  if(words[0] == '') words.shift();
  console.log(words)
  let res = '';
  words.forEach((el, idx) => {
    if(idx === 0) res += el;
    else if(el !== ''){
      let w = el.slice(0, 1).toUpperCase() + el.slice(1, el.length).toLowerCase();
      res += w;
    }
  });
  return res;
}

let reg = /-+/;

console.log(reg.test('-'));
console.log(reg.test('--'));
console.log(dashToHump('font-size'));