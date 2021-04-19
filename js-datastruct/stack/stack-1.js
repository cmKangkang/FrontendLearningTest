export default class Stack {
  constructor(){
    this.items = [];
  }

  push(el){
    this.items.push(el);
  }

  pop(){
    return this.items.pop();
  }

  // 返回栈顶元素
  peek(){
    return this.items[this.items.length - 1];
  }

  isEmpty(){
    return this.items.length === 0;
  }

  clear(){
    this.items.length = 0;
  }

  size(){
    return this.items.length;
  }
}