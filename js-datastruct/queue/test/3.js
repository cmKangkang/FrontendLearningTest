import Queue from '../queue.js';
// 击鼓传花游戏
function hotPotato(elementsList, num) { 
  const queue = new Queue();
  const elimitatedList = [];
  for (let i = 0; i < elementsList.length; i++) { 
    queue.enQueue(elementsList[i]); // {2}
  }
  while (queue.size() > 1) { 
    for (let i = 0; i < num; i++) { 
      queue.enQueue(queue.deQueue()); // {3}
    } 
    elimitatedList.push(queue.deQueue());
  } 
  return {
    eliminated: elimitatedList, 
    winner: queue.deQueue()
  }
} 

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']; 
const result = hotPotato(names, 7);
result.eliminated.forEach(name => { 
  console.log(`${name}在击鼓传花游戏中被淘汰。`);
});
console.log(`胜利者： ${result.winner}`);