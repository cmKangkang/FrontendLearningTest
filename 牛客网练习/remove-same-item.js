
/**
 * 
 * @param {Array} arr 数组 
 * @param {*} item 对比对象 
 */
function removeWithCopy(arr, item){
  let res = [];
  arr.forEach((el, idx) => {
      if(el !== item) res.push(el);
  })
  return res;
}

/**
 * 
 * @param {Array} arr array
 * @param {Number} item number
 * @returns array
 */
function removeWithoutCopy(arr, item){
  let idx = arr.length - 1;
  function remove(tarr, idx){
    for(let i = idx; i < tarr.length - 1; i++){
      tarr[i] = tarr[i + 1];
    }
    tarr.length -= 1;
  }
  while(idx > -1){
    if(arr[idx] === item) {
      remove(arr, idx);
    }
    idx--;
  }
  return arr;
}


