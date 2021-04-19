import Stack from "./stack-set.js";

export function demicalToBinary(dec){
  const remStack = new Stack();
  let num = dec;
  let rem, binStr = '';

  while (num > 0){
    rem = Math.floor(num % 2);//获取余数
    remStack.push(rem);// 余数存入栈
    num = Math.floor(num / 2);//获取商
  }

  while (!remStack.isEmpty()) {
    binStr += remStack.pop().toString();//高位出栈转换成字符串并拼接
  }

  return binStr;
}

export function baseConverter(dec, base){
  const remStack = new Stack();
  const digists = '0123456789abcdefghijklmnopqrstuvwxyz';
  let num = dec;
  let rem, baseStr = '';
  if(!(base >= 2 && base <= 36)){
    return '';
  }
  while(num > 0){
    rem = Math.floor(num % base);
    remStack.push(rem);
    num = Math.floor(num / base);
  }
  while(!remStack.isEmpty()){
    baseStr += digists[remStack.pop()];
  }
  return baseStr;
}