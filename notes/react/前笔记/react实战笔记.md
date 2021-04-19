...：扩展运算符

**`对象中的扩展运算符(...)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中`**

**如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。**

```js
const first=1;
const second=[3,4,5,6];
const third=[first,...second];//也即third=[1,3,4,5,6]
```



动态绑定

ES6模板字符串：

模板字符串使用反引号 (``) 来代替普通字符串中的用双引号和单引号。**模板字符串可以包含特定语法（${expression}）的占位符。占位符中的表达式和周围的文本会一起传递给一个默认函数，该函数负责将所有的部分连接起来**，如果一个模板字符串由表达式开头，则该字符串被称为带标签的模板字符串，该表达式通常是一个函数，它会在模板字符串处理后被调用，在输出最终结果前，你都可以通过该函数来对模板字符串进行操作处理。



# 参数

不能直接修改state，需要使用setState修改state，该方法是异步的。





# react渲染过程

1、React整个的渲染机制就是React会调用render()函数构建一棵Dom树，
2、在**state/props**发生改变的时候，render()函数会被再次调用渲染出另外一棵树，重新渲染所有的节点，构造出新的虚拟Dom tree跟原来的Dom tree用Diff算法进行比较，找到需要更新的地方批量改动，再渲染到真实的DOM上，由于这样做就减少了对Dom的频繁操作，从而提升的性能。

# 一、react render()

1、在使用React进行构建应用时，我们总会有一个步骤将组建或者虚拟DOM元素渲染到真实的DOM上，将任务交给浏览器，进而进行**layout和paint**等步骤，这个函数就是React.render()

ReactComponent render( ReactElement element, DOMElement container, [function callback] )
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190318152042239.png)

2、接收2-3个参数，并返回ReactComponent类型的对象，当组件被添加到DOM中后，执行回调。在这里涉及到了两个React类型–ReactComponent和ReactElement

***3、 进入页面render()执行了几次***
render在componentWillMount后会执行一次，会在props及state改变时执行。

> 1. 首次加载
> 2. setState改变组件内部state。 注意： 此处是说通过setState方法改变。
> 3. 接受到新的props



# 二、Diff算法

react的一大特点就是虚拟DOM的diff算法，下图为diff实现流程图。
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019031815332182.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01pY2hlbGxlWmhhaQ==,size_16,color_FFFFFF,t_70)
diff算法的特点如下图：传统 diff 算法的复杂度为 O(n^3)，单纯从demo看，复杂度不到n3，但实际上。React 通过制定大胆的策略，将 O(n^3) 复杂度的问题转换成 O(n) 复杂度的问题

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190318153333528.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01pY2hlbGxlWmhhaQ==,size_16,color_FFFFFF,t_70)
1、在React中，两棵DOM树只会对同一层的节点进行比较，若发现节点已不存在，则该节点及其子节点会被完全删除，不会用于进一步的比较。这样，只需要对树进行一次遍历，就能完成整个DOM树的比较
2、对于同层节点，React在数组遍历的增减关键字Key,若节点本身完全相同(类型相同，属性相同)，只是位置不同，则React只需要考虑同层节点的位置变换，不需要进行节点的销毁和重新创建