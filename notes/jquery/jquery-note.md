# 语法
* $ 定义 jquery
* 选择符（selector)查询和查找HTML元素
* action()执行对元素的操作
---

# jquery cdn引用
可将jQuery放到独立的js文件中
---

# 文档就绪事件 $(document).ready(function(){})
    这是为了防止文档再完全加载之前运行jQuery代码，即在dom加载完成之后才可以对DOM进行操作

## jQuery入口函数
jQuery入口函数
```js
$(document).ready(function(){
// 执行代码
});
或者
$(function(){
    // 执行代码
});
```

js入口函数
```js
window.onload=function(){}
```
* jQuery 的入口函数是在 html 所有标签(DOM)都加载之后，就会去执行。
* JavaScript 的 window.onload 事件是等到所有内容，包括外部图片之类的文件加载完后，才会执行。
---

# 选择器
* 元素选择器 eg:$("p");
* #id 选择器 eg:$("#id");
* .class选择器 eg:$(".class")

## 更多
语法	描述	
$("*")	    选取所有元素	
$(this)	    选取当前 HTML 元素	
$("p.intro")	    选取 class 为 intro 的 <p> 元素	
$("p:first")	    选取第一个 <p> 元素	
$("ul li:first")	    选取第一个 <ul> 元素的第一个 <li> 元素	
$("ul li:first-child")	    选取每个 <ul> 元素的第一个 <li> 元素	
$("[href]")	    选取带有 href 属性的元素	
$("a[target='_blank']")	    选取所有 target 属性值等于 "_blank" 的 <a> 元素	
$("a[target!='_blank']")	选取所有 target 属性值不等于 "_blank" 的 <a> 元素	
$(":button")	    选取所有 type="button" 的 <input> 元素 和 <button> 元素	
$("tr:even")	    选取偶数位置的 <tr> 元素	
$("tr:odd")         选取奇数位置的 <tr> 元素	

---

# jquery事件
步骤：
1. 指定一个点击事件
$("p").click();
2. 定义事件触发的动作
$("p").click(function(){
    // 动作触发后执行的代码!!
});

## 常用的事件方法
* $(document).ready()
* click()
* dbclick() 双击
* mouseenter() 鼠标指针穿过元素
* mouseleave() 鼠标离开元素
* mousedown() 鼠标选中按下
* mouseup() 鼠标松开
* hover() 光标悬停
* focus() 获得焦点
* blur() 失焦
* keydown() 在键盘上按下某键时发生,一直按着则会不断触发（opera浏览器除外）, 它返回的是键盘代码
* keypress() 在键盘上按下一个按键，并产生一个字符时发生, 返回ASCII码。注意: shift、alt、ctrl等键按下并不会产生字符，所以监听无效 ,换句话说, 只有按下能在屏幕上输出字符的按键时keypress事件才会触发。若一直按着某按键则会不断触发
* keyup()  用户松开某一个按键时触发, 与keydown相对, 返回键盘代码.
---


# jquery 效果
## 隐藏和显示 hide() show()
语法：
* $(selector).hide(speed,callback);
* $(selector).show(speed,callback);

对speed进行调节可实现动画效果,也可不带参数，也可编写回调函数实现后续的动作
**注意，对可选的callback**
1. $(selector)选中的元素的个数为n个，则callback函数会执行n次；
2. callback函数名后加括号，会立刻执行函数体,此时只会调用一次，不是等到显示/隐藏完成后才执行；如果callback后不加括号，元素显示或隐藏后调用函数，才会多次调用
```js
$(document).ready(function(){
  $(".hidebtn").click(function(){
    $("div").hide(1000, "linear", add());
      // 只需要记住 有括号就先执行括号里面的,就跟我们数学基础运算一样
  });
});
    
function  add() {
    alert("Hide() 方法已完成!");
}

//add()加上括号 add是执行函数,直接执行
//若是 add 那么则可以理解为把add当作参数,由click函数调用add函数
```
3. callback既可以是函数名，也可以是匿名函数;
4. 

eg:
$("#hide").click(function(){
  $("p").hide(500);
});
---
$("#show").click(function(){
  $("p").show(700);
});

## toggle()
用过，细节自己搞

## 淡入淡出
* fadeIn() 
* fadeOut()
* fadeToggle()
$(selector).fadeIn/Out/Toggle(speed,callback);
* fadeTo() 渐变为可变透明度
$(selector).fadeTo(speed,opacity,callback);
---


## 滑动
* slideDown() 下滑
* slideUp() 上滑
* slideToggle() 在上下滑动中切换
$(selector).slideUp/DownToggle(speed,callback)

## 动画
到时候了解

## jquery链
eg:
```js
$("#p1").css("color","red").slideUp(2000).slideDown(2000);
```


# jquery 获取、设置内容和属性
可操作HTML元素和属性
* DOM操作
    DOM=Document Object Model(文档对象模型)

* 获得内容 **text()、html()、val()**
  * text() - 设置或返回所选元素的文本内容
  * html() - 设置或返回所选元素的内容（包括 HTML 标记）
  * val() - 设置或返回表单字段的值

  eg:
  ```js
  $(document).ready(function(){
    $("#btn1").click(function(){
      alert("Text: " + $("#test").text());
    });
    $("#btn2").click(function(){
      alert("HTML: " + $("#test").html());
    });
    $("#btn3").click(function({
      alert("form value: "+$("#text-test").val());
    })
  });
```

* 获取属性 **attr()**
  eg:
  ```js
  $("#btn").click(function({
    alert($("#test").attr("href"));//获取test的href属性
  })

* 设置内容 **text()、html()、val()**
  同获得内容处所写。
  text() - 设置或返回所选元素的文本内容
  html() - 设置或返回所选元素的内容（包括 HTML 标记）
  val() - 设置或返回表单字段的值
  ```js
  $("#test").text("changed text");
  ```

  * text()、html()、val()
    text()、html() 以及 val()，同样拥有回调函数。回调函数有两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。然后以函数新值返回您希望使用的字符串
    


* 设置属性 **attr()**
  同理
  * 回调函数同理

* **添加html内容**
  - append() - 在被选元素的结尾插入内容
  - prepend() - 在被选元素的开头插入内容
  - after() - 在被选元素之后插入内容
  - before() - 在被选元素之前插入内容
  该四个函数均可接收无限数量的新元素
  ```js
  let a=<li>new list item </li>
  $("#btn").click(function(){
    $(".list").append(a);
  });
  $("#btn").click(function(){
    $(".list #item2").after(a,a,a);
  });
  ```

* **删除元素**
  - remove() - 删除被选元素（及其子元素）
  - empty() - 从被选元素中删除子元素
  ```js
  $("#div1").remove();//移除div1
  $("#div1").empty();//移除div1的子元素
  $("p").remove(".italic");//移除italic块下的所有<p>元素
  ```

# jQuery 获取并设置CSS
- **addClass()** - 向被选元素添加一个或多个类
  向html元素添加CSS类，以达到控制样式的目的
  ```html
  <style type="text/css">
  .important
  {
    font-weight:bold;
    font-size:xx-large;
  }
  .blue
  {
    color:blue;
  }
  </style>
  <script>
  $(document).ready(function(){
    $("button").click(function(){
      $("body div:first").addClass("important blue");//向第一个div添加important和blue类
    });
  });
  </script>
  ```
---


- **removeClass()** - 从被选元素删除一个或多个类
  理同addClass
- toggleClass() - 对被选元素进行添加/删除类的*切换*操作
  ```js
  $(document).ready(function(){
    $("button").click(function(){
      $("h1,h2,p").toggleClass("blue");
    });
  });
  ```
---

- **css()** - 设置或返回样式属性
  * 返回指定的 CSS 属性的值，请使用如下语法：
    css("propertyname");
    ```js
    $("p").css("background-color");
    ```

  * 设置css属性
    css("propertyname","value");
    ```js
    $("p").css("background-color","yellow");
    ```
  
  * 设置多个css属性
    css({"propertyname":"value","propertyname":"value",...});
    ```js
    $("p").css({"background-color":"yellow","font-size":"200%"});
    ```
  
* jquery 尺寸
  jQuery 提供多个处理尺寸的重要方法：

  - width()
  - height()
  - innerWidth()
  - innerHeight()
  - outerWidth()
  - outerHeight()
<img src="./img/jquery-height-width.gif">
  利用上述方法可实现获取和设置操作



# jQuery 遍历
### 遍历 DOM
jQuery 提供了多种遍历 DOM 的方法。
遍历方法中最大的种类是树遍历（tree-traversal）。

### 遍历-祖先
祖先是父、祖父或曾祖父等等。
通过 jQuer向上遍历 DOM 树，以查找元素的祖先。
* parent() - 返回被选元素的直接父元素，只会向上一级对dom进行遍历
* parents() - 返回被选元素的所有祖先，它一路向上直到文档根元素<html>
* parentsUntil() - 返回介于两个给定元素之间的所有祖先元素，有参数，为给定的父元素
  ```js
  $(document).ready(function(){
  $("span").parentsUntil("div");//返回span与div之间的span的父元素
  });
  ```

### 遍历-后代
后代是子、孙、曾孙等等。
通过 jQuery向下遍历 DOM 树，以查找元素的后代。
* children() - 返回被选元素的所有*直接*子元素,该方法只会向下一级对 DOM 树进行遍历，可以指定参数过滤对子元素的搜索
  ```js
  $(document).ready(function(){
  $("div").children("p.1");//返回类名为1的所有<p>元素
  });
  ```

* find() - 返回被选元素的后代元素，一路向下直到最后一个后代。可选参数
  ```js
  $(document).ready(function(){
    $("div").find("span");  //返回属于 <div> 后代的所有 <span> 元素
  });
  $(document).ready(function(){
    $("div").find("*");//返回 <div> 的所有后代
  });

### 遍历同胞
同胞拥有相同的父元素。
通过 jQuery在 DOM 树中遍历元素的同胞元素。
- siblings() - 返回被选元素的所有同胞元素

- next() - 返回被选元素的下一个同胞元素，该方法只返回一个元素。

- nextAll() - 返回被选元素的所有跟随的同胞元素。

- nextUntil() - 返回介于两个给定参数之间的所有跟随的同胞元素。

- prev()
- prevAll()
- prevUntil()
    prev(), prevAll() 以及 prevUntil() 方法的工作方式与上面的方法类似，只不过方向相反而已：它们返回的是前面的同胞元素（在 DOM 树中沿着同胞之前元素遍历，而不是之后元素遍历）

### 遍历-过滤
* 三个最基本的过滤方法是：first()（第一个）, last()（最后一个） 和 eq()（等于，需带参数，为索引号）
  ```js
  $(document).ready(function(){
  $("p").eq(1);//选取第二个 <p> 元素（索引号 1）
  });
```

**注意，首个索引号是0，1是第二个**

* filter() （制定规则）和 not()(返回不匹配的) 允许您选取匹配或不匹配某项指定标准的元素
  ```js
  $(document).ready(function(){
  $("p").filter(".url");
  });
```
---


# jQuery Ajax
是与服务器交换数据的技术，在不重载全部页面的情况下，实现了对部分网页的更新。
AJAX = 异步JS和XML
AJAX在后台加载数据，并在网页上显示。

通过 jQuery AJAX 方法，您能够使用 HTTP Get 和 HTTP Post 从远程服务器上请求文本、HTML、XML 或 JSON - 同时您能够把这些外部数据直接载入网页的被选元素中。

### load()
load() 方法从服务器加载数据，并把返回的数据放入被选元素中。
  ```js
  //语法
  $(selector).load(URL,data,callback);
  ```
eg:
```js
$(function(){
    $(".load").load("./info.text");//在.load中加入info.txt的内容

    $("#div1").load("demo_test.txt #p1");//"demo_test.txt" 文件中 id="p1" 的元素的内容，加载到指定的 <div> 元素


   })
```

可选callback参数规定方法完成后所要允许的回调函数，可设置不同的参数：
  - responseTxt - 包含调用成功时的结果内容
  - statusTXT - 包含调用的状态
  - xhr - 包含 XMLHttpRequest 对象
```js
$(".load").load("./info.text",function(responseTxt,statusTxt,xhr){
            if(statusTxt=="success")
              alert("文件加载成功，内容为："+responseTxt);
              else alert("内容加载失败。")
            });
```
也可以使用load()对文件部件进行复用


## get()和post()方法
get()和post()方法通过HTTP GET或POST请求服务器数据  
* GET - 从指定的资源请求数据 - 该方法可能返回缓存数据
* POST - 向指定的资源提交要处理的数据 - POST 方法不会缓存数据，并且常用于连同请求一起发送数据。

### get()方法
$.get(URL,callback);
必须的URL，规定您希望请求的URL。
```js
$("button").click(function(){
  $.get("demo_test.php",function(data,status){
    alert("数据: " + data + "\n状态: " + status);
  });
});
```


### post()方法
$.post(URL,data,callback);
- 必需的 URL 参数规定您希望请求的 URL。
- 可选的 data 参数规定连同请求发送的数据。
- 可选的 callback 参数是请求成功后所执行的函数名。
```js
$("button").click(function(){
    $.post("/try/ajax/demo_test_post.php",
    {
        name:"菜鸟教程",
        url:"http://www.runoob.com"
    },
    function(data,status){
        alert("数据: \n" + data + "\n状态: " + status);
    });
});
```
**安全性**
GET 方法发送的数据不受保护，因为数据在 URL 栏中公开，这增加了漏洞和黑客攻击的风险。

**主要作用**
GET 方法主要用于获取信息。而 POST 方法主要用于更新数据。


## ajax()
ajax() 方法用于执行 AJAX（异步 HTTP）请求。
 jQuery AJAX 方法都使用 ajax() 方法。该方法通常用于其他方法不能完成的请求。
$.ajax({name:value, name:value, ... })

FF

# jquery　noConflict()方法
解决其他框架也使用$作为简写符号的情况。


