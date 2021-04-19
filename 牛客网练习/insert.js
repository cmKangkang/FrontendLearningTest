function insert(arr, item, index) {
  return arr.slice(0, index).concat(item, arr.slice(index))
}
console.log(insert([1,2,3,4,5,6,7,8], 0, 3));