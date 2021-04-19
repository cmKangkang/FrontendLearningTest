# Vue双向数据绑定

## 精简版

Vue是采用数据劫持结合发布/订阅模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

getter函数，获取object对象的属性值。
setter函数，对object对象的属性进行赋值。

发布函数，发布的时候执行相应的回调。
订阅函数，添加订阅者,传入发布时要执行的函数,可能会携额外参数。

数据劫持：Object.defineProperty来劫持对象属性的setter和getter操作，并“种下”一个监听器，当数据发生变化的时候发出通知

## Object.defineProperty()

该方法会直接在对象上定义一个新的属性，或者修改一个对象的现有属性，并返回此对象。

## 实现过程

四个步骤：

1. 实现一个监听器 Observer，用于劫持并监听所有属性，如果有变动，就通知订阅者。
2. 实现一个订阅者 Watcher，可以接收到属性的变化通知并执行相应的函数，从而更新视图。
3. 实现一个解析器 Compile，对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数。
4. mvvm入口函数，整合以上三者。

![img](https://img-blog.csdnimg.cn/20210317211950475.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjAzODI5MA==,size_16,color_FFFFFF,t_70)

dep：消息订阅器，用于收集订阅者，在Observer和订阅者之间进行统一管理。

compile：指令解析器，对每个节点元素进行扫描和解析，将相关指令初始化成一个Watcher，并替换模板数据或绑定相应的函数。此时当Watcher接收到相应属性的变化，就会执行对应的更新函数，从而更新视图。



### Observer

数据监听器，实现的核心方法就是Object.defineProperty()。

若要对所有属性进行监听的话，可以通过递归方法遍历所有属性值，并对其进行Object.defineProperty()处理。

