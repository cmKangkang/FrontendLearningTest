// 实现监听器observer
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
    // const dep = new Dep();
    new Observer(value);//递归遍历所有子属性
    Object.defineProperty(obj, key, {
      configurable: true,
      enumrable: true,
      get: function(){
        // 若当前有对该属性的依赖项，则将其加入到发布者的订阅者队列
        // if( Dep.target ){
        //   dep.addSub(Dep.target);
        // }
        console.log("监听中---> getter 已被执行");
        return value;
      },
      set: function(newValue){
        if( value ===  newValue ) return;
        value = newValue;
        // new Observer(value);//递归检测
        console.log("监听中---> setter 已被执行")
      }
    })
  }
}

var library= {
  book1: {
    name:'',
  },
  book2:'',
};

var observe = new Observer(library);
library.book1.name = 'vue指南';
library.book2 = {
  name: 'nexus',
  price: '$15',
};