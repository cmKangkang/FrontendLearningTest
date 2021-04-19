function solution(c, times, init, ops){
  let cake = init;
  ops.forEach((op, idx) => {
    console.log(op);
    let [i, j, k] = [...op];
    let count = 1
    while(i <= j) {
      cake[i - 1] = (cake[i - 1] + count * k) % 1000000007;
      i++;
    }
  })
  
  // cake.forEach((el) => {
  //   print(el+' ');
  // })
  console.log(cake);
}

solution(1, 2, [1, 2, 3, 4, 1],[[1,3,1],[2,5,2],[3,3,6]]);