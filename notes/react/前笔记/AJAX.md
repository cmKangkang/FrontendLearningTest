id

pwd

传输的就这俩



密码格式：

长度必须在8-16位之间

必须包含英文与数字





视频播放，使用video.js

播放rtmp视频流





登录界面

取得id以及密码

将id密码加密

连接服务器，上传账号密码

与数据库比对

比对成功则跳转页面





# AJAX

AJAX = 异步 JavaScript 和 XML。

AJAX 是一种用于创建快速动态网页的技术。

通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

传统的网页（不使用 AJAX）如果需要更新内容，必需重载整个网页面。

# AJAX - 创建 XMLHttpRequest 对象

**XMLHttpRequest 是 AJAX 的基础。**

所有现代浏览器均支持 XMLHttpRequest 对象（IE5 和 IE6 使用 ActiveXObject）。

XMLHttpRequest 用于在后台与服务器交换数据。这意味着可以在不重新加载整个网页的情况下对页面进行更新

- [
  AJAX 实例](https://www.w3school.com.cn/example/ajax_examples.asp)

## 建站手册

- [网站构建](https://www.w3school.com.cn/site/index.asp)
- [万维网联盟 (W3C)](https://www.w3school.com.cn/w3c/index.asp)
- [浏览器信息](https://www.w3school.com.cn/browsers/index.asp)
- [网站品质](https://www.w3school.com.cn/quality/index.asp)
- [语义网](https://www.w3school.com.cn/semweb/index.asp)
- [职业规划](https://www.w3school.com.cn/careers/index.asp)
- [网站主机](https://www.w3school.com.cn/hosting/index.asp)

## 编程

- [Python 教程](https://www.w3school.com.cn/python/index.asp)

## 精品网课推荐

- [VUE 教程](https://datayi.cn/w/xRxaZq0P)

## [关于 W3School](https://www.w3school.com.cn/about/index.asp)

## [帮助 W3School](https://www.w3school.com.cn/about/about_helping.asp)

# AJAX - 创建 XMLHttpRequest 对象

- [AJAX 实例](https://www.w3school.com.cn/ajax/ajax_example.asp)
- [XHR 请求](https://www.w3school.com.cn/ajax/ajax_xmlhttprequest_send.asp)

**XMLHttpRequest 是 AJAX 的基础。**

## XMLHttpRequest 对象

所有现代浏览器均支持 XMLHttpRequest 对象（IE5 和 IE6 使用 ActiveXObject）。

XMLHttpRequest 用于在后台与服务器交换数据。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

## 创建 XMLHttpRequest 对象

```js
variable=new XMLHttpRequest();
```

**XMLHttpRequest 对象用于和服务器交换数据。**

## 向服务器发送请求

如需将请求发送到服务器，我们使用 XMLHttpRequest 对象的 open() 和 send() 方法：

```js
xmlhttp.open("GET","test1.txt",true);
xmlhttp.send();
```

| 方法                         | 描述                                                         |
| :--------------------------- | :----------------------------------------------------------- |
| open(*method*,*url*,*async*) | 规定请求的类型、URL 以及是否异步处理请求。*method*：请求的类型；GET 或 POST   *url*：文件在服务器上的位置    *async*：true（异步）或 false（同步） |
| send(*string*)               | 将请求发送到服务器。*string*：仅用于 POST 请求               |

## GET 还是 POST？

与 POST 相比，GET 更简单也更快，并且在大部分情况下都能用。

然而，在以下情况中，请使用 POST 请求：

- 无法使用缓存文件（更新服务器上的文件或数据库）
- 向服务器发送大量数据（POST 没有数据量限制）
- 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠