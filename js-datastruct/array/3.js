let arr1 = [1, 2, 3, 4];
let arr2 = [9, 8, 7, 6];

Array.prototype.myConcat = function( arr1, arr2 ){
  return [...arr1,...arr2];
}
Array.prototype.concat1 = function( ...arr ){
  let tmp = this;
  for( let i=0; i<arr.length; i++){
    tmp = [...tmp, ...arr[i]];
  }
  return tmp;
}

console.log(arr1.concat(arr2));

let tmp1 = [].myConcat(arr1, arr2);
console.log(tmp1);

let tmp2 = [].__proto__.myConcat(arr1,arr2);
console.log(tmp2);

console.log( arr1.concat1( arr2 ) );

