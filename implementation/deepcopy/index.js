function deepCopy(newObj, oldObj){
  for(let key in oldObj){
    let item = oldObj[key];
    if(item instanceof Array){
      newObj[key] = [];
      deepCopy(newObj[key], item);
    }
    else if(item instanceof Function){
      // 注意，当 item instanceof Function 为真时，item instanceof Object 也为真
      newObj[key] = item;
    }
    else if(item instanceof Object){
      newObj[key] = {};
      deepCopy(newObj[key], item);
    }
    else{
      newObj[key] = item;
    }
  }
}

var o1 = {
  name: '01',
  age:'18',
  toString: function(){
    return `name : ${this.name}, age : ${this.age}, pros : ${this.pros.join(' ')}`;
  },
  pros:['js', 'java', 'c', ['es6', 'es7']],
}

var o2 = {};
deepCopy(o2, o1);

var o3 = {};
Object.assign(o3, o1);

var o4 = JSON.parse(JSON.stringify(o1));

o1.name = 'kk';
o1.pros[3][3] = 'es8';
console.log(o1.toString());
console.log(o2.toString());
console.log(o3.toString());
console.log(o4.toString());



// console.log(o1['toString'] instanceof Function);
// console.log(typeof o1['toString']);