var p = Promise.all([]); // 当可迭代对象为空时，是同步的
var p2 = Promise.all([1337, "hi"]); // non-promise values will be ignored, but the evaluation will be done asynchronously
var p3 = Promise.all([1337, "hi"]);
// var p4 = Promise.all([1337, 'hi']);
p3.then(res => {
  console.log(res);
})

console.log(p);
console.log(p2);
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p2);
    console.log(p3);
});
