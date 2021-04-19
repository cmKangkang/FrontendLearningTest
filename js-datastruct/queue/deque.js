export default class Deque {
  constructor(){
    this._front = 0;
    this._back = 1;
    this._items = {};
  }

  isEmpety(){
    return this._front + 1 === this._back;
  }

  clear(){
    this._items = {};
    this._front = 0;
    this._back = 1;
  }

  size(){
    return this._back - this._front - 1;
  }

  toString(){}

  addFront(el){
    if(this.isEmpety()){
      this.addBack(el);
    }
    else if(this._front > 0){
      this._items[this._front--] = el;
    }
    else {
      for (let i = this._back; i > 1; i--) {
        this._items[i] = this._items[i - 1];
      }
      this._back++;
      this._front = 0;
      this._items[1] = el;
    }
  }

  addBack(el){
    this._items[this._back++] = el;
  }

  removeFront(){
    const res = this._items[this._front + 1];
    delete this._items[++this._front];
    return res;
  }

  removeBack(){
    const res = this._items[this._back - 1];
    delete this._items[--this._back];
    return res;
  }

  peekFront(){
    return this._items[this._front + 1];
  }

  peekBack(){
    return this.items[this._back - 1];
  }
}