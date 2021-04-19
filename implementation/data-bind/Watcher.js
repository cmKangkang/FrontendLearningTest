import {Dep} from './Observer.js';

export function Watcher(viewmodel, prop, callback) {
  this.viewmodel = viewmodel;
  this.prop = prop;
  this.callback = callback;
  this.value = this.get();
}

Watcher.prototype = {
  update: function() {
    // 获取新的值，与watcher中的老的值比较
    const value = this.viewmodel.$data[this.prop];
    const oldVal = this.value;
    if(value !== oldVal) {
      this.value =value;
      this.callback(value);
    }
  },
  get: function() {
    // 储存订阅器
    Dep.target = this;
    //因为属性被监听，这一步会执行监听器里的 get方法
    const value = this.viewmodel.$data[this.prop];
    Dep.target = null;
    return value;
  }
}