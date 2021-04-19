function rgb2Hex(sRgb){
  // (x) 会匹配x并且记住匹配项
  let tmp = sRgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\s*\)/)
  // console.log(tmp);
  if(!tmp) return sRgb;
  function getHex(str){
    let num = Number(str).toString(16);
    return num.length < 2 ? '0' + num :num;
  }
  return '#' + getHex(tmp[1]) + getHex(tmp[2]) + getHex(tmp[3]);
}
console.log(rgb2Hex('rgb(234,  123,  67)'));
console.log(rgb2Hex('rgb(255,255,100)'));
