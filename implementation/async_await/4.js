console.log('-- begin --');
const pro = new Promise((res, rej) => {
  console.log('=> promise 1 excutor');
  res(1);
});
pro.then(res => {
  console.log('=> promise 1 then');
});

async function test() {
  console.log('=> async 1')
  await setTimeout(() => {
    console.log('=> await 1')
  });
  console.log('=> script 1');
}

test();
