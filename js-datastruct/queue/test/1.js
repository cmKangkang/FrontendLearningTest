import Queue from "../queue.js";

const queue = new Queue();
console.log(queue.isEmpety());
queue.enQueue('Jack');
queue.enQueue('Tiga');
queue.enQueue('Nexus');
queue.enQueue('Noa');
console.log('length: ' + queue.size());
queue.deQueue();
queue.deQueue();
console.log(queue.toString());