function sum(arr){
  return arr.reduce((total, val) => {
    return total += val;
  }, 0)
}

console.log(sum([1,2,3,4,5,6,8]));