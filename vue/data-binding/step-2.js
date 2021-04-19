class Observer{
  constructor(data){
    // 判断是否是对象，不是则返回
    if(!data || typeof data !=='object') return ;
    this.data = data;
    this.walk();//挟持数据
  }

  // 对传入的数据进行劫持
  walk(){
    for(let key in this.data){
      this.defineReactive(this.data, key, this.data[key]);
    }
  }

  defineReactive(obj, key, value){
    const dep = new Dep();
    new Observer(value);//递归遍历所有子属性
    Object.defineProperty(obj, key, {
      configurable: true,
      enumrable: true,
      get: function(){
        // 若当前有对该属性的依赖项，则将其加入到发布者的订阅者队列
        if( Dep.target ){
          dep.addSub(Dep.target);
        }
        console.log("监听中---> getter 已被执行");
        return value;
      },
      set: function(newValue){
        if( value ===  newValue ) return;
        value = newValue;
        new Observer(value);//递归检测
        console.log("监听中---> setter 已被执行")
      }
    })
  }
}

// 实现消息订阅器dep，用于通知订阅者watcher
class Dep{
  constructor(){
    this.subs = [];
  }

  // 添加至订阅容器
  addSub(sub){
    // 检测是否已经存在于容器
    if( this.subs.indexOf(sub) < 0 ){
      this.subs.push(sub);
    }
  }

  // 通知订阅者
  notify(){
    this.subs.forEach( sub => {
      sub.updata();
    })
  }
}

Dep.target = null;

// 实现watcher
class Watcher{
  constructor( vm, keys, updateCb ){
    this.vm = vm;
    this.keys = keys;
    this.updateCb = updateCb;
    this.value = null;
    this.get();
  }

  // 根据vm和keys获取最新的观察值
  get(){
    Dep.target = this;
    const keys = this.keys.split('.');
    let value = this.vm.data;
    keys.forEach( _key => {
      value = value[_key];
    });
    this.value = value;
    Dep.target = null;
    return this.value;
  }

  update(){
    const oldValue = this.value;
    const newValue = this.get();
    if( oldValue !== newValue ){
      this.updateCb( oldValue, newValue );
    }
  }
}

class MyVue{
  constructor( options ){
    this.options = options;
    this.data = options.data;
    this.methods = options.methods;
    this.init();
  }

  init(){
    Object.keys(this.data).forEach(key=>{
        this.proxyKeys(key);  // 绑定代理属性
    });
    new Observer(this.data);
    new Compile(this.options.el,this);
    this.options.mounted.call(this); // 所有事情处理好后执行mounted函数
}
proxyKeys(key){
    Object.defineProperty(this, key, {
        enumerable: false,
        configurable: true,
        get: function proxyGetter() {
            return this.data[key];
        },
        set: function proxySetter(newVal) {
            this.data[key] = newVal;
        }
    });
}   

}