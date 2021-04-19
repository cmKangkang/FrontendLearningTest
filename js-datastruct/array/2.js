let arr1 = [1,,3,5];
let arr2 = [,4,,2];

let arr = [arr1, , arr2];
console.log(arr);

// 递归数组输出
function traverse( arr ){
  // console.log(arr instanceof Array);
  if( !(arr instanceof Array) ){
    // console.log(arr);
    process.stdout.write(arr+' ');
    return;
  }
  let i=0;
  while( i < arr.length ){
    traverse(arr[i]);
    i++;
  }
  process.stdout.write('\n');
}

traverse(arr);

