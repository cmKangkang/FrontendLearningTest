# js基础知识点-数据类型与运算符

## 变量数据类型

1. 六种基本数据类型：

   1. 五种基本数据类型：String、Number、Boolean、Null、Undefined

   2. 一种引用数据类型：Object 对象

      1. 内置对象Function、Array、Date、RegExp、Error等都是object类型。也即，**除了五种基本数据类型，其他的都是object类型**。
      2. 引用数据类型只有一种，即object。


2. **数据类型之间最大的区别：**
   1. **基本数据类型在参数赋值时，传数值；**
   2. **引用参数类型在参数赋值时传地址。**

## 栈内存与堆内存

js中所有的**变量**都是保存在**栈内存**中的。其中：

* **基本数据类型**：基本数据类型的值，直接保存在栈内存中。值与值之间是独立存在，修改一个变量不会影响其他的变量。
* **引用数据类型**：对象是保存到**堆内存**中的。每创建一个新的对象，就会在堆内存中开辟出一个新的空间；而**变量保存了对象的内存地址**（对象的引用），保存在栈内存当中。如果两个变量保存了同一个对象的引用，当一个通过一个变量修改属性时，另一个也会受到影响。



## string

1. 关于引号

   1. 同类引号不能嵌套：双引号里不能再放双引号，单引号里不能再放单引号。
   2. 单引号里可以嵌套双引号；双引号里可以嵌套单引号。

2. 转义字符：

   1. `\"` 表示 `"` 双引号
   2. `\'` 表示 `'` 单引号
   3. `\\` 表示`\`
   4. `\r` 表示回车
   5. `\n` 表示换行。n 的意思是 newline。
   6. `\t` 表示缩进。t 的意思是 tab。
   7. `\b` 表示空格。b 的意思是 blank。

3. 获取字符串长度：length属性。（注意属性后不能加（））

4. 字符串拼接之后不会改变原串，而是返回一个新串（在内存中开辟了一个新的内存空间。

5. **模板字符串**（模板字面量）：

   es6新引入

   ```javascript
   var name = 'rkk';
   var age = '21';
   console.log('name:' + name + ',age:' + age); //传统写法
   console.log(`我是${name},age:${age}`); //ES6 写法。注意语法格式,利用反引号与${}
   
   const a = 5;
   const b = 10;
   
   // 模板字符串加入表达式与换行
   console.log(`this is ${a + b} and
   not ${2 * a + b}.`);
   
   //模板串可调用函数
   function getName() {
   	return 'rkk';
   }
   
   console.log(`www.${getName()}.com`); // 打印结果：www.rkk.com
   
   //模板串还支持嵌套
   ```



## Boolean

布尔型和数字型相加时， true 按 1 来算 ，false 按 0 来算。



## Number

js中所有数字都是Number类型.

1. 数值范围

   1. 最大值- Number.MAX_VALUE ,为1.7976931348623157e+308
   2. 最小值 - Number.MIN_VALUE ,为5e-324
   3. 无穷大:Infinity(当大于 最大时);无穷小:-Infinity(小于最小时). 注意,typeof Infinity  返回number

2. NaN: Not a Number.非数值

   1. `typeof NaN`的返回结果是 number。
   2. Undefined和任何数值计算的结果为 NaN。NaN 与任何值都不相等，包括 NaN 本身
   3. 

3. 隐式转换:

   1. `-`、`*`、`/`、`%`这几个符号会导致字符串自动进行隐式转换

      ```js
      var a='4'+3-6;
      console.log(a);//37
      ```

4. 浮点数运算:

   1. js运算都要转成二进制计算,所以有的小数无法精确表示,导致运算出现误差.
   2. toFix()方法截取小数



## Null

专用于定义空对象.

```js
typeof null;//object
/*
Null 类型的值只有一个，就是 null。比如 let a = null。

使用 typeof 检查一个 null 值时，会返回 object。
*/
```

## Undefined

1. 变量声明,但未赋值时,为undefined
2. typeof undefiend 返回undefined
3. 变量未声明时就去使用它,会报错,若用typeof 检查这个变量时,则会返回undefined.
4. 函数无返回值,则函数的返回值就是undefined
5. 调用参数时未传参,则参数值为undefined

## undefined与null

1. null==undefined  返回true,但null===undefined 返回 false
2. number+null为number;  number+undefined为NaN
3. 即
   1. 任何数据类型和 undefined 运算都是 NaN;
   2. 任何值和 null 运算，null 可看做 0 运算。

## 变量类型转换:显式与隐式

显式类型转换:

- toString()
- String()
- Number()
- parseInt(string)
- parseFloat(string)
- Boolean()

1. 使用Number()

   undefined--->number  结果为NaN;

   null--->number 结果为 0;

   true为1,false为0;

2. parseInt()为字符串转整数.



## 运算符

### 自增与自减

自增:

自增分成两种：`a++`和`++a`。

（1）一个变量自增以后，原变量的值会**立即**自增1。也就是说，无论是 `a++` 还是`++a`，都会立即使原变量的值自增1。

（2）**我们要注意的是**：`a`是变量，而`a++`和`++a`是**表达式**。

那这两种自增，有啥区别呢？区别是：`a++` 和 `++a`的值不同：（也就是说，表达式的值不同）

- **`a++`这个表达式的值等于原变量的值（a自增前的值）。你可以这样理解：先把 a 的值赋值给表达式，然后 a 再自增。**

- **`++a`这个表达式的值等于新值 （a自增后的值）。 你可以这样理解：a 先自增，然后再把自增后的值赋值给表达式。**

  ```js
  var a=0;//a=0
  ++a;//此时a=1
  console.log(a);//1
  
  a++;//此时a=1;
  console.log(a);//2
  ```

自减同理.

---

### 非布尔值的与或运算

**与运算**的返回结果：（以多个非布尔值的运算为例）

- 如果第一个值为false，则执行第一条语句，并直接返回第一个值；不会再往后执行。
- 如果第一个值为true，则继续执行第二条语句，并返回第二个值（如果所有的值都为true，则返回的是最后一个值）。

**或运算**的返回结果：（以多个非布尔值的运算为例）

- 如果第一个值为true，则执行第一条语句，并直接返回第一个值；不会再往后执行。
- 如果第一个值为false，则继续执行第二条语句，并返回第二个值（（如果所有的值都为false，则返回的是最后一个值）。

```js
//当前端成功调用一个接口后，返回的数据为 result 对象。这个时候，我们用变量 a 来接收 result 里的图片资源。通常的写法是这样的：
if (result.resultCode == 0) {
	var a = result && result.data && result.data.imgUrl || 'http://img.smyhvae.com/20160401_01.jpg';
}
```

### 非布尔值的!运算

非布尔值进行**与或运算**时，会先将其转换为布尔值，然后再运算，但返回结果是**布尔值**。

```
let a = 10;
a = !a

console.log(a);  // false
console.log(typeof a); // boolean
```

### 利用好短路原理

```js
const a1 = 'qianguyihao';
//第一个值为true，会继续执行后面的内容
a1 && alert('看 a1 出不出来'); // 可以弹出 alert 框

const a2 = undefined;
//第一个值为false，不会继续执行后面的内容
a2 && alert('看 a2 出不出来'); // 不会弹出 alert 框

/*===================================*/

const result; // 请求接口时，后台返回的内容
let errorMsg = ''; // 前端的文案提示

if (result && result.retCode != 0) {
	// 接口返回异常码时
	errorMsg = result.msg || '活动太火爆，请稍后再试'; // 文案提示信息，优先用 接口返回的msg字段，其次用 '活动太火爆，请稍后再试' 这个文案兜底。
}

if (!result) {
	// 接口挂掉时
	errorMsg = '网络异常，请稍后再试';
}
```

