let ts = [3, 6, 9];
let n = 3;
let k = 5;
let count = [];
let next = [];
for(let i = 0;i < n; i++) {
    count[i] = 0;
    next[i] = ts[i];
}

console.log(next);

let j = 0;
while(j < k) {
    let min = 1000000, index = 0;
    next.forEach((el, idx) => {
        if(el < min) {
            min = el;
            index = idx;
        }
    });
    console.log(index + 1);
    next[index] +=  ts[index];
    j++;
}