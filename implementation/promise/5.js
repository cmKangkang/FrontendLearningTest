const p1 = new Promise((res, rej) => {
  setTimeout(res, 1000, '1000');
  setTimeout(rej, 300, '300')
});

const p2 = new Promise((res, rej) => {
  setTimeout(res, 100, '100');
});

Promise.race([p1]).then(data => {
  console.log('res: ' + data);
}).catch(data => {
  console.log('rej: ' + data);
});

Promise.race([p1, p2]).then(data => {
  console.log('res: ' + data);
}).catch(data => {
  console.log("rej: " + data);
});