Array.prototype.insertHead1 = function( value ){
  for( let i = this.length; i > 0; i--){
    this[i] = this[i - 1];
  }
  this[0] = value;
}

// Array.prototype.insertHead2 = function( value ){
//   let arr = [value, ...this];
// }

let arr = [1, 2, 3, 4, 5];
arr.unshift(0);
console.log(arr);

arr.insertHead1(-1);
console.log(arr);

// arr.insertHead2(-2);
// console.log(arr);