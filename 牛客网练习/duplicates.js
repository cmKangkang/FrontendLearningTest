/**
 * 寻找重复出现过的元素
 * @param {*} arr 
 * @returns 
 */
function duplicates(arr) {
  let tmp = [];
  arr.forEach(el => {
    // 若元素出现的第一个下标与最后一个下标不一样，则重复出现过，
    // 若它没有在结果中出现过，就把他加入结果
      if(arr.indexOf(el) != arr.lastIndexOf(el) && tmp.indexOf(el) === -1){
          tmp.push(el);
      }
  });
  return tmp;
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]));
function test() { return duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]).sort().join(' ') };
