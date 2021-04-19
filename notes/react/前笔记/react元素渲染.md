# React 元素渲染

元素是构成 React 应用的最小单位，它用于描述屏幕上输出的内容。

```
const element = <h1>Hello, world!</h1>;
```

与浏览器的 DOM 元素不同，React 当中的元素事实上是普通的对象，React DOM 可以确保 浏览器 DOM 的数据内容与 React 元素保持一致。



### 将元素渲染到 DOM 中

```js
const element = <h1>Hello, world!</h1>; ReactDOM.render(    element,    document.getElementById('root') );
```

ReactDOM.render()函数将element元素插到id=“root”的块中。

（可能react在云端默认有一个根元素id=“root”的html文件）

在项目文件中，真正调用的是index.js，而在index.js中调用了app.js中的内容。



### 更新元素渲染

React 元素都是不可变的。当元素被创建之后，你是无法改变其内容或属性的。

目前更新界面的唯一办法是创建一个新的元素，然后将它传入 ReactDOM.render() 方法：

来看一下这个计时器的例子:



**React 只会更新必要的部分**

值得注意的是 React DOM 首先会比较元素内容先后的不同，而在渲染过程中只会更新改变了的部分。





# React jsx

```
const element = <h1>Hello, world!</h1>;
```

一种 JavaScript 的语法扩展。 我们推荐在 React 中使用 JSX 来描述用户界面。

JSX 是在 JavaScript 内部实现的。

我们知道元素是构成 React 应用的最小单位，JSX 就是用来声明 React 当中的元素。

与浏览器的 DOM 元素不同，React 当中的元素事实上是普通的对象，React DOM 可以确保 浏览器 DOM 的数据内容与 React 元素保持一致。

**要将 React 元素渲染到根 DOM 节点中，我们通过把它们都传递给 ReactDOM.render() 的方法来将其渲染到页面上：**

```js
var myDivElement = <div className="foo" />; ReactDOM.render(myDivElement, document.getElementById('example'));
```





注意:

由于 JSX 就是 JavaScript，一些标识符像 `class` 和 `for` 不建议作为 XML 属性名。作为替代，React DOM 使用 `className` 和 `htmlFor` 来做对应的属性。



## 使用 JSX

JSX 看起来类似 HTML ，我们可以看下实例:

ReactDOM.render(    <h1>Hello, world!</h1>,    document.getElementById('example') );

我们可以在以上代码中嵌套多个 HTML 标签，需要使用一个 div 元素包裹它，实例中的 p 元素添加了自定义属性 **data-myattribute**，添加自定义属性需要使用 **data-** 前缀。

```js

ReactDOM.render(    
    <div>    
    <h1>菜鸟教程</h1>
    <h2>欢迎学习 React</h2>
    <p data-myattribute = "somevalue">这是一个很不错的 JavaScript 库!</p>
    </div>    ,    document.getElementById('example')
);
```

然后在 HTML 文件中引入该 JS 文件：

```html

<body>  <div id="example"></div> <script type="text/babel" src="helloworld_react.js"></script> </body>

```



在 JSX 中不能使用 **if else** 语句，但可以使用 **conditional (三元运算)** 表达式来替代。以下实例中如果变量 **i** 等于 **1** 浏览器将输出 **true**, 如果修改 i 的值，则会输出 **false**.

```js
ReactDOM.render(
    <div>
      <h1>{i == 1 ? 'True!' : 'False'}</h1>
    </div>
    ,
    document.getElementById('example')
);
```



## 样式

React 推荐使用内联样式。我们可以使用 **camelCase** 语法来设置内联样式. React 会在指定元素数字后自动添加 **px** 。以下实例演示了为 **h1** 元素添加 **myStyle** 内联样式：

```js
var myStyle = {
    fontSize: 100,
    color: '#FF0000'
};
ReactDOM.render(
    <h1 style = {myStyle}>菜鸟教程</h1>,
    document.getElementById('example')
);
```



## 注释

注释需要写在花括号中，实例如下：

```js

ReactDOM.render(    <div>    <h1>菜鸟教程</h1>    {/*注释...*/}     </div>,    document.getElementById('example') );
```



## 数组

JSX 允许在模板中插入数组，数组会自动展开所有成员：

```js
var arr = [
  <h1>菜鸟教程</h1>,
  <h2>学的不仅是技术，更是梦想！</h2>,
];
ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('example')
);
```



# react组件

