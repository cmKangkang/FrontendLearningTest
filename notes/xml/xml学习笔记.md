#### xml实例文档

```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<note>
<to>George</to>
<from>John</from>
<heading>Reminder</heading>
<body>Don't forget the meeting!</body>
</note>
```

第一行是xml声明，定义版本和使用的编码。

下一行描述文档的根元素：<note>

接下来四个子元素：<to>,<from>,<heading>,<body>



xml具有出色的自我描述性。



#### XML文档形成一种树形结构

XML 文档必须包含*根元素*。该元素是所有其他元素的父元素。

XML 文档中的元素形成了一棵文档树。这棵树从根部开始，并扩展到树的最底端

所有元素均可拥有子元素，父、子以及同胞等术语用于描述元素之间的关系。父元素拥有子元素。相同层级上的子元素成为同胞（兄弟或姐妹）。

所有元素均可拥有文本内容和属性（类似 HTML 中）。

![img](https://www.w3school.com.cn/i/ct_nodetree1.gif)

```xml
<bookstore>
<book category="below">
    <title lang="ch">"Harry Potter"</title>
    <author>J K. Rolling</author>
    <year>2005</year>
    <price>29.99</price>
    </book>
</bookstore>
```





#### 所有xml元素都必须有关闭标签

##### xml声明不属于xml本身的组成部分。

​	它不是xml元素，不需要关闭标签

----





#### xml对大小写敏感

----



#### xml必须正确嵌套

-----



#### xml文档必须有根元素

----



#### xml的属性值必须加引号

eg:

```xml
<name lang="ch"></name>
```

-----



#### 实体引用

在 XML 中，一些字符拥有特殊的意义。

如果你把字符 "<" 放在 XML 元素中，会发生错误，这是因为解析器会把它当作新元素的开始。

这样会产生 XML 错误：

在 XML 中，有 5 个预定义的实体引用：

| &lt;   | <    | 小于   |
| ------ | ---- | ------ |
| &gt;   | >    | 大于   |
| &amp;  | &    | 和号   |
| &apos; | '    | 单引号 |
| &quot; | "    | 引号   |

---

#### xml的注释

```xml
<!-- This is a comment -->
```

-----



#### xml中空格会被保留

​	如上，但在HTML中的多个连续空格会被裁剪为一个

---



#### xml以LF存储换行

---



#### xml命名规则

	* 可以含字母、数字以及其他字符
	* 不能以数字或标点开始
	* 不能以“xml"(or "XML"、"Xml")开始
	* 名称不能包含空格

###### 可用任何名称，没有保留的字词

----



#### 命名习惯

​	建议多个单词使用下划线

----

#### xml元素可扩展

XML 的优势之一，就是可以经常在不中断应用程序的情况进行扩展。	

---

#### 尽量使用元素来描述数据，少用属性

-----

#### 针对元数据的XML属性

有时候会向元素分配 ID 引用。这些 ID 索引可用于标识 XML 元素，它起作用的方式与 HTML 中 ID 属性是一样的。这个例子向我们演示了这种情况：

```xml
<messages>
  <note id="501">
    <to>George</to>
    <from>John</from>
    <heading>Reminder</heading>
    <body>Don't forget the meeting!</body>
  </note>
  <note id="502">
    <to>John</to>
    <from>George</from>
    <heading>Re: Reminder</heading>
    <body>I will not</body>
  </note> 
</messages>
```

上面的 ID 仅仅是一个标识符，用于标识不同的便签。它并不是便签数据的组成部分。

在此我们极力向您传递的理念是：元数据（有关数据的数据）应当存储为属性，而数据本身应当存储为元素。

---

#### 

