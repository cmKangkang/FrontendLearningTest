function quickSort(arr){
  let len = arr.length;
  if(len > 0){
    let left = [];
    let right = [];
    const pivot = arr[len - 1];
    for(let i = 0; i < len - 1; i++){
      if(arr[i] <= pivot) left.push(arr[i]);
      else right.push(arr[i]);
    }
    let tmp1 = quickSort(left);
    let tmp2 = quickSort(right);
    return tmp1.concat(pivot, ...tmp2);
  }
  else return [];
}

let arr = [3, 6, 2, 4, 7, 9, 10, 22];
let sort = quickSort(arr, 0, arr.length);
console.log(sort);