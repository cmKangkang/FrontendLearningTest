/**
 * 删除数组最后一个元素，不改变原数组
 * @param {*} arr 
 * @returns array
 */
 function truncate(arr) {
  return arr.slice(0, arr.length - 1);
}

console.log(removeWithoutCopy([1, 2, 2, 3, 4, 2, 2], 2))
