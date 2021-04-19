setTimeout(() => {
  console.log('=> settimeout 1');
},0);
process.nextTick(() => {
  console.log('=> nexttick 1');
});
setImmediate(() => {
  console.log('=> setimmediate 1');
});