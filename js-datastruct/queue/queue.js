export default class Queue {
  constructor(){
    this._head = 0;//队头
    this._end = 0;//队尾
    this._items = {};
  }

  enQueue(el){
    this._items[this._end++] = el;
  }

  deQueue(){
    if(this.isEmpety()) return;
    const result = this._items[this._head];
    delete this._items[this._head++];
    return result;
  }

  peek(){
    if(this.isEmpety()){
      return;
    }
    return this._items[this._head];
  }

  isEmpety(){
    if(this._head === this._end) return true;
    return false;
  }

  size(){
    return this._end - this._head;
  }

  clear(){
    this._items = {};
    this._end = 0;
    this._head = 0;
  }

  toString(){
    if(this.isEmpety()){
      return '';
    }
    let str = '';
    for(let i = this._head; i < this._end; i++){
      str += this._items[i] + ' '; 
    }
    return str;
  }
}