# 二分查找

```js
  // 迭代
  function binarySearch(arr, key){
    let low = 0;
    let high = arr.length - 1;
    while (low <= high){
      let mid = parseInt((low + high) / 2);

      if(key == arr[mid]){
        return  mid;
      }
      else if(key > arr[mid]){
        low = mid + 1;
      }
      else{
        high = mid -1;
      }
    }
    return -1;
  }


  // 递归
  function binarySearch(arr, key, low, high){
    if(low > high) return -1;
    let mid = parseInt((low + high) / 2);
      if(key === arr[mid]) return mid;
      else if(key <= arr[mid]) return binarySearch(arr, key, low, mid - 1);
      else return binarySearch(arr, key, mid + 1, high); 
  }

```