function indexOf(arr, item){
  if(arr.indexOf){
    console.log('here1');
    return arr.indexOf(item);
  }else{
    console.log('here2');
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === item) return i;
    }
  }

  return -1;
}

console.log(indexOf([1,2,3,4,5,6], 6));