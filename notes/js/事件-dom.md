# 事件

事件：就是文档或浏览器窗口中发生的一些特定的交互瞬间。



## 事件三要素

事件源、事件、事件驱动程序。

- 事件源：引发后续事件的html标签。
- 事件：js已经定义好了（见下图）。
- 事件驱动程序：对样式和html的操作。也就是DOM。

**代码书写步骤如下：**（重要）

- （1）获取事件源：document.getElementById(“box”); // 类似于Android里面的findViewById
- （2）绑定事件： 事件源.事件 = function(){ 事件驱动程序 };
- （3）书写事件驱动程序：关于DOM的操作。

![img](https://camo.githubusercontent.com/30c50dd6ef77dca23ca4d744170980ce9c8c9bf44885ba6f3ee7704a06328767/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303132365f313535332e706e67)

## onload事件

**当页面加载（文本和图片）完毕的时候，触发onload事件。**

**js的加载是和html同步加载的**。因此，如果使用元素在定义元素之前，容易报错。这个时候，onload事件就能派上用场了，我们可以把使用元素的代码放在onload里，就能保证这段代码是最后执行。



# dom

js基础分为3部分：

- ECMAScript：JavaScript的语法标准。包括变量、表达式、运算符、函数、if语句、for语句等。
- **DOM**：文档对象模型（Document object Model），操作**网页上的元素**的API。比如让盒子移动、变色、轮播图等。
- **BOM**：浏览器对象模型（Browser Object Model），操作**浏览器部分功能**的API。比如让浏览器自动滚动。

## 节点

**节点**（Node）：构成 HTML 网页的最基本单元。网页中的每一个部分都可以称为是一个节点，比如：html标签、属性、文本、注释、整个文档等都是一个节点。

虽然都是节点，但是实际上他们的具体类型是不同的。常见节点分为四类：

- 文档节点（文档）：整个 HTML 文档。整个 HTML 文档就是一个文档节点。
- 元素节点（标签）：HTML标签。
- 属性节点（属性）：元素的属性。
- 文本节点（文本）：HTML标签中的文本内容（包括标签之间的空格、换行）。

节点的类型不同，属性和方法也都不尽相同。所有的节点都是Object。

## 什么是dom

document object model , 文档对象模型。

DOM 为文档提供了结构化表示，并定义了如何通过脚本来访问文档结构。目的其实就是为了能让js操作html元素而制定的一个规范。

### DOM可以做什么

- 找对象（元素节点）
- 设置元素的属性值
- 设置元素的样式
- 动态创建和删除元素
- 事件的触发响应：事件源、事件、事件的驱动程序

## dom节点获取

querySelector   querySelectorAll

![img](https://camo.githubusercontent.com/6f86de4696b3e5732a659861b4e4c40fe08eed6986a7a67079fbb8e9433bae96/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303132365f323134352e706e67)



## dom节点操作

创建节点：document.createElement()

插入节点：

* 父节点.appendChild(新的子节点);
* 父节点.insertBefore(新的子节点,作为参考的子节点)

删除节点：父节点.removeChild(子节点);如果我想删除自己这个节点，可以这么做：node1.parentNode.removeChild(node1);

复制节点：要复制的节点.cloneNode();       //括号里不带参数和带参数false，效果是一样的，只复制节点本身，不复制子节点；带true则既复制本身也复制所有子节点。

设置/获取节点属性：

* 元素节点.属性名=值;  元素节点[属性名]=值;
* 元素节点.getAttribute("属性名称"); 元素节点.setAttribute("属性名", "新的属性值");

删除节点属性：元素节点.removeAttribute(属性名);



### dom对象属性补充

- value：标签的value属性。
- **innerHTML**：双闭合标签里面的内容（包含标签）。
- **innerText**：双闭合标签里面的内容（不包含标签）。（老版本的火狐用textContent）

#### nodeType属性

这里讲一下nodeType属性。

- **nodeType == 1 表示的是元素节点**（标签） 。记住：在这里，元素就是标签。
- nodeType == 2 表示是属性节点。
- nodeType == 3 是文本节点。