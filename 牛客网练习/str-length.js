function strLength(str, flag){
  // 当flag为true，所有字符长度为1
  // 当flag为false，则Unicode > 255的字符长度为2
  let length = 0;
  if(!flag){
    for(let i = 0; i < str.length; i++){
      if(str.charCodeAt(i) > 255) length++;
      length++;
    }
  }else{
    length = str.length;
  }
  return length;
}

console.log(strLength('hello world, 牛客', false));