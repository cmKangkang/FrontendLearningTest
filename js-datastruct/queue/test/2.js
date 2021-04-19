import Deque from "../deque.js";

const deque = new Deque();

console.log(deque.isEmpety());

deque.addFront('Tiga');
deque.addFront('Nexus');
console.log(deque.size());

console.log(deque.removeBack());
console.log(deque.removeFront());
console.log(deque.isEmpety());