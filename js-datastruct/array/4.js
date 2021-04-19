let arr = [1, 2, 3, 4, 5, 6, 7];

let total = arr.reduce((pre, current, idx, arr) => {
  return pre + current;
});
console.log("total: ", total);

let max = arr.reduce((pre, current) => {
  return pre > current ? pre : current;
});
console.log("max: ", max);


