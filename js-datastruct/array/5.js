let arr = [1, 2, 3, 4, 5, 6, 7];
// 取得@@iterator对象
let iterator = arr[ Symbol.iterator ]();
let tmp0 = iterator.next();
while( !tmp0.done ){
  console.log(tmp0.value);
  tmp0 = iterator.next();
}

// enrtries取得@@iterator
let ae = arr.entries();
let idx = 0;
while( idx < arr.length ){
  console.log(ae.next());
  idx++;
}

// keys获取迭代器
let ak = arr.keys();
let tmp1 = ak.next();
while( !tmp1.done ){
  console.log(tmp1.value);
  tmp1 = ak.next();
}

// values获取迭代器
let av = arr.values();
while(true){
  let tmp = av.next();
  if(tmp.done) break;
  console.log(tmp);
}