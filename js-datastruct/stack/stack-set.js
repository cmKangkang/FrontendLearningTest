export default class Stack {
  constructor(){
    this._items = {};
    this._count = 0;
  }

  push(el){
    this._items[this._count] = el;
    this._count++;
  }

  pop(){
    if(this.isEmpty()) return;
    this._count--;
    const result = this._items[this._count];
    delete this._items[this._count];
    return result;
  }

  // 返回栈顶元素
  peek(){
    if(this.isEmpty()) return;
    return this._items[this._count - 1];
  }

  isEmpty(){
    return this._count === 0;
  }

  clear(){
    this._count = 0;
    this._items = {};
  }

  size(){
    return this._count;
  }

  toString(){
    if(this.isEmpty) return '';
    let ob = '';
    for(let i=0; i<this._count; i++){
      ob = ob + ',' + this._items[i];
    }
    return ob;
  }
}