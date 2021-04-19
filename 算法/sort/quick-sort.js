function quickSort(arr, p, r){
  r = r || arr.length;
  if(p < r - 1){
    let q = divide(arr, p, r);
    quickSort(arr, p, q);
    quickSort(arr, q + 1, r);
  }
  // return arr;
}

function divide(arr, p, r){
  // let pivot = arr[r];
  const pivot = arr[r - 1];
  let i = p - 1;
  let j = p;
  while(j < r - 1){
    if(arr[j] <= pivot){
      i++;
      swap(arr, i, j);
    }
    j++;
  }
  swap(arr, i + 1, r - 1);
  return i + 1;
}

function swap(arr, i, j){
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

let arr = [3, 6, 2, 4, 7, 9, 10, 22];
quickSort(arr, 0, arr.length);
console.log(arr);