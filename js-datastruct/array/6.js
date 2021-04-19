let arr = [-1, 1, 2, 3, 4, 5, 6, 7, , 8];
let even0 = Array.from( arr );
let even1 = Array.from( arr, x => (x >= 0));
console.log(even0, even1);

arr.copyWithin(1,3,5);
console.log(arr);

arr.fill(-1, 2);
console.log(arr);