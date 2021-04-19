function countCharacter(str){
  let obj = {};
  for(let i = 0; i < str.length; i++){
    let tmp = str[i];
    if(tmp === ' ') continue; 
    if(obj.hasOwnProperty(tmp)){
      obj[tmp] += 1;
    }else{
      obj[tmp] = 1;
    }
  }
  return obj;
}

console.log(countCharacter('hello world'));