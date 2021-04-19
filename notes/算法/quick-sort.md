# 快排

平均时间复杂度 ： O(nlogn)
最坏时间复杂度 ： O(n^2)

## 快排三个步骤

1. 从数组中选择一个元素作为基准点；

2。 排序数组，所有比基准值小的元素放左边，比基准值大的放右边。每次分割结束以后基准值会插到中间；

3. 最后利用递归，将摆放在左边的数组和右边的数组进行一次上述1、2操作。

in-place 快速排序代码如下：

```js
  
  function quickSort( arr, p, r ){
    r = r || arr.length;
    if(p < r - 1>){
      const q = divide(arr, p, r);
      quickSort(arr, p, q);
      quickSort(arr, q + 1, r);
    }
    return arr;
  }

  // 分割函数，用于划分，使得一部分小于pivot，一部分大于pivot
  // 返回pivot的下标
  function divide( arr, p, r ){
    const pivot = arr[r - 1];

    let i = p - 1;

    for(let j = p; j< r-1; j++){
      if(arr[j] <= pivot){
        i++;
        swap(arr, i, j);
      }
    }

    swap(arr, i + 1, r - 1);

    return i + 1;
  }
  
  // 交换数组的值
  function swap( arr, x, y ){
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
```