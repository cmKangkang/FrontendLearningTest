# 双向数据绑定

双向数据绑定即 data --> view  与  view --> data。
view --> data实现很容易，只需要监听事件与增加回调函数改变数据即可。

利用`Object.defineProperty`来对数据进行挟持，并结合发布-订阅者模式来实现双向数据绑定。

* observer 监听器来监听属性的变化，Object.definedProperty()就在observer中起作用。

* 得知属性变化后，需要一个watcher 订阅者来更新视图。

* 还需要一个 compile 指令解析器 用于解析节点元素以及初始化视图。

## observer

用来监听属性的变化通知订阅者，defineProperty在其中其数据挟持的作用

通过对对象的递归调用Object.defineProperty可实现对所有属性的挟持。

## watcher

watcher主要用于接收属性变化的通知，然后执行更新视图的函数。

1. 把watcher添加到Dep，这里在监听器的get中添加

2. 接收到通知，执行更新函数

## compile

主要作用是

1. 解析指令初始化模板，

2. 添加订阅者，绑定更新函数
