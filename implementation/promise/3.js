function A(){
  console.log("A");
}

function B(){
  console.log("B");
}

function C(){
  new XMLHttpRequest();
  console.log("C");
}

let pro = Promise.resolve();
pro.then(A)
  .then(B)
  .catch(C);

