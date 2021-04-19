function step(n) {
  return new Promise((res, rej) => {
    res('promise ' + n);
  });
}

function temp(n) {
  return n;
}

async function test() {
  let s1 = await step(1);
  console.log(s1);
  let s2 = await temp(2);
  s2.then(res => {
    console.log(res);
  })
  // s1.then(res => {
  //   console.log(res);
  // })
}

test();