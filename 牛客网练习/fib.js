function fibonacci(n) {
  let temp = [0, 1, 1];
  if(n <= 2) return n;
  else{
      for(let i = 3; i <= n; i++){
          temp.push(temp[i - 1] + temp[i - 2]);
      }
  }
  return temp[n];
}

console.log(fibonacci(10));