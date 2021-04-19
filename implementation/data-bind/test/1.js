import {Observer} from '../Observer.js';
let obj1 = {
  name: 'kk',
  age: 21,
}
Observer(obj1);
obj1.age = 22;
obj1.name = 'll';
console.log(obj1.name);