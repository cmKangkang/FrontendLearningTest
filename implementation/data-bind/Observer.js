export function Dep() {
  this.subs = [];
}

Dep.prototype.addSub = function(sub) {
  this.subs.push(sub);
}

Dep.prototype.notify = function() {
  // 属性变化通知watcher 执行更新视图函数
  this.subs.forEach(sub => {
    sub.update();
  })
}

Dep.target = null;

function defineReactive(data, key, value) {
  // 递归调用监听所有属性
  Observer(value);
  let dep = new Dep();
  Object.defineProperty(data, key, {
    get: function() {
      console.log('--- get ---> value : ' + value);
      if(Dep.target) {
        dep.addSub(Dep.target);
      }
      return value;
    },
    set: function(newVal){
      console.log('--- set ---> value : ' + newVal);
      if(value !== newVal) {
        value = newVal;
        // 值不相同，则通知订阅器
        dep.notify();
      }
    }
  })
}

export function Observer(data) {
  if(!data || typeof data !== 'object') {
    return;
  }
  // 监听所有属性
  Object.keys(data).forEach(key => {
    defineReactive(data, key, data[key]);
  })
}