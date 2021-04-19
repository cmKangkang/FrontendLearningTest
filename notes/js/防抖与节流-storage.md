# 防抖与节流

防抖动和节流本质是不一样的。

* 防抖动是将多次执行变为最后一次执行。防止事件在一段事件内多次调用。
* 节流是将多次执行变成每隔一段时间执行。

# 继承

ES5中，继承可以采用：

* 原型继承（利用空函数做桥接）

* 思路：将子类的原型设为父类的原型

  ```js
  function Super() {}
  Super.prototype.getNumber = function() {
    return 1
  }
  
  function Sub() {}
  let s = new Sub()
  Sub.prototype = Object.create(Super.prototype, {
    constructor: {
      value: Sub,
      enumerable: false,
      writable: true,
      configurable: true
    }
  })
  ```

  

ES6中通过class语法

```js
class MyDate extends Date {
  test() {
    return this.getTime()
  }
}
let myDate = new MyDate()
myDate.test()
```



# 跨域

浏览器出于安全考虑，有**同源策略**。

也即，若协议、域名或端口有一个不同就是跨域，Ajax会请求失败。



## jsonp

 原理：通过<script>标签没有跨域限制的漏洞，通过<script>标签指向一个需要访问的地址并提供一个回调函数来接受数据。

```html
<script src="http://domain/api?param1=a&param2=b&callback=jsonp"></script>
<script>
    function jsonp(data) {
    	console.log(data)
	}
</script>
```

兼容性不错，但仅限于get请求。



## CORS

CORS 需要浏览器和后端同时支持。

浏览器会自动实行CORS通信，实现的关键是后端。

服务端是指`Access-Control-Allow-Origin`就可开启CORS。





# 存储

### cookie，localStorage，sessionStorage，indexDB

|     特性     |                   cookie                   |       localStorage       | sessionStorage |         indexDB          |
| :----------: | :----------------------------------------: | :----------------------: | :------------: | :----------------------: |
| 数据生命周期 |     一般由服务器生成，可以设置过期时间     | 除非被清理，否则一直存在 | 页面关闭就清理 | 除非被清理，否则一直存在 |
| 数据存储大小 |                     4K                     |            5M            |       5M       |           无限           |
| 与服务端通信 | 每次都会携带在 header 中，对于请求性能影响 |          不参与          |     不参与     |          不参与          |

* cookie已经不建议用于存储。

* 若无大量数据存储需求，可以使用`localStorage`和`sessionStorage`。
* 对不怎么改变的数据尽量使用`localStorage`存储，否则用`sessionStorage`



cookie的安全性：

|   属性    |                             作用                             |
| :-------: | :----------------------------------------------------------: |
|   value   | 如果用于保存用户登录态，应该将该值加密，不能使用明文的用户标识 |
| http-only |            不能通过 JS 访问 Cookie，减少 XSS 攻击            |
|  secure   |               只能在协议为 HTTPS 的请求中携带                |
| same-site |  **规定浏览器不能在跨域请求中携带 Cookie，减少 CSRF 攻击**   |



## service worker

本质充当web应用于浏览器之间的代理服务器，也可以在网络可用时作为浏览器和网络之间的代理。

目前该技术通常用于做缓存文件，提高首屏速度。



# 渲染机制

浏览器渲染机制一般分为以下步骤：

1. 处理HTML并构建DOM树
2. 处理CSS构建CSSDOM树
3. 将DOM与CSSDOM合并成一颗渲染树
4. 根据渲染来布局，计算每个节点的位置
5. 调用GPU绘制，合成图层，显示在屏幕上

![img](https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-043710.png)

在构建CSSDOM时，会阻塞渲染，直至CSSDOM树构建完成。**构建CSSDOM树十分消耗性能，故应该保证层叠扁平，减少过渡层叠，越具体的css选择器执行速度越慢。**

当HTML解析到script标签时，会暂停构建DOM，完成对script的解析才会从暂停的地方开始。也即，想要首屏渲染的越快，就越不应该在首屏就加载执行JS文件。CSS也会影响JS的执行，只有解析完样式表才会执行JS。



## Load 和 DOMContentLoaded 的区别

Load事件触发代表页面中的DOM，CSS，JS，图片已经全部加载完毕。

DOMContentLoaded事件触发代表初始的HTML被完全加载和解析，不需要等待CSS，JS，图片加载。

也即 DOMContentLoaded 事件发生在 Load事件之前。



## 图层

## 重绘与回流

* **重绘**是当前节点需要更改外观而不会影响布局的，比如改变color就成为重绘。
* **回流**是布局或者几何属性需要改变就称为回流

**回流必定引发重绘，重绘不一定引发回流**。

回流的成本比重绘高许多，改变深层次的节点很可能导致父节点的一系列回流。









