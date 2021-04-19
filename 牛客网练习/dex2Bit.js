function dex2Bin(num, bit){
   return Array.from(num.toString(2)).reverse()[bit - 1];
}

console.log(dex2Bin(128, 8));

function bin2Dex(str) {
  return parseInt(str, 2);
}

console.log(bin2Dex('11000000'));

console.log((3 * 0.001).toFixed(3))