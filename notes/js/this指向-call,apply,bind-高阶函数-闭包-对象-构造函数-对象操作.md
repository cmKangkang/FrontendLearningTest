# this指向

## 执行期上下文

当函数发生预编译的前一刻，会创建一个执行期上下文的内部对象（一个执行期上下文定义了一个函数执行时的环境）。

每调用一词函数，就会创建一个新的上下文对象，它们之间是相互独立且独一无二的。当函数执行完毕，它所产生的执行期上下文会被销毁。



## this

解析器在调用函数时每次都会向函数内部传递一个隐含的参数，即this。this指向一个对象，称为函数执行的上下文对象。

## 函数内this的指向

函数调用方式不同，this指向的对象不同：

* 以函数的形式（包括普通函数、定时器函数、立即执行函数）调用时，this 的指向永远都是 window。比如`fun();`相当于`window.fun();`

* 以方法的形式调用时，this 指向调用方法的那个对象。

* 以构造函数的形式调用时，this 指向实例对象。

* 以事件绑定函数的形式调用时，this 指向**绑定事件的对象**。

* 使用 call 和 apply 调用时，this 指向指定的那个对象。

  ```js
  function fun() {
      console.log(this);
      console.log(this.name);
  }
  
  var obj1 = {
      name: 'smyh',
      sayName: fun,
  };
  
  var obj2 = {
      name: 'vae',
      sayName: fun,
  };
  
  var name = '全局的name属性';
  
  //以函数形式调用，this是window
  //可以理解成 window.fun()
  fun(); //Window
      //全局的name属性
  
  //以方法的形式调用，this是调用方法的对象
  obj2.sayName();//object 
  				//vae
  
  
  ```

### 箭头函数中this的指向

ES6 中的箭头函数并不会使用上面的准则，而是会继承外层函数调用的 this 绑定（无论 this 绑定到什么）。

### 如何改变内部函数的this指向

call()、apply()、bind() 方法



# call、apply、bind

## call()方法

作用：

1. 调用一个函数，可以改变函数内部的this指向。

2. 可以实现继承。原理见第一条

**`语法`**:  `fn1.call(想要将this指向哪里, 函数实参1, 函数实参2);`

```js
var obj1 = {
    nickName: 'qianguyihao',
    age: 28,
};

function fn1(a, b) {
    console.log(this);
    console.log(this.nickName);
    console.log(a + b);
}

fn1.call(this, 2, 4);//指向没有改变，相当于fn1（）
//window
//undefined
//6

fn1.call(obj1, 2, 4); // 先将 this 指向 obj1，然后执行 fn1() 函数
//obj1
//qianguyihao
//6
```

```js
// 给 Father 增加 name 和 age 属性
function Father(myName, myAge) {
    this.name = myName;
    this.age = myAge;
}

function Son(myName, myAge) {
    // 【下面这一行，重要代码】
    // 通过这一步，将 father 里面的 this 修改为 Son 里面的 this；另外，给 Son 加上相应的参数，让 Son 自动拥有 Father 里的属性。最终实现继承
    Father.call(this, myName, myAge);
}

const son1 = new Son('千古壹号', 28);
console.log(JSON.stringify(son1));
```

## apply()方法

作用：与call类似。

**`语法`**:`fn1.apply(想要将this指向哪里, [函数实参1, 函数实参2]);`

注意：如果不需要改变this指向，则传null。

**call() 和 apply() 方法的作用是相同的。唯一的区别在于，apply() 里面传入的实参，必须是数组（或者伪数组）。**

通过apply改变this指向：

```js
var obj1 = {
    nickName: 'qianguyihao',
    age: 28,
};

function fn1(a) {
    console.log(this);
    console.log(this.nickName);
    console.log(a);
}

fn1.apply(obj1, ['hello']); // 先将 this 指向 obj1，然后执行 fn1() 函数
```

### apply()方法妙用：求数组最大值

利用Math.max();

Math.max.apply(Math,arr);

```js
const arr1 = [3, 7, 10, 8];

// 下面这一行代码的目的，无需改变 this 指向，所以：第一个参数填 null，或者填 Math，或者填 this 都可以。严格模式中，不让填null。
const maxValue = Math.max.apply(Math, arr1); // 求数组 arr1 中元素的最大值
console.log(maxValue);

const minValue = Math.min.apply(Math, arr1); // 求数组 arr1 中元素的最小值
console.log(minValue);
```



## bind()方法

作用：不会调用函数，但可以改变函数内部的this指向。

实际开发中， bind() 方法使用得最为频繁。如果有些函数，我们不需要立即调用，但是又想改变这个函数内部的this指向，此时用 bind() 是最为合适的。

`语法`:`新函数 = fn1.bind(想要将this指向哪里, 函数实参1, 函数实参2);`

参数：

- 第一个参数：在 fn1 函数运行时，指定 fn1 函数的this 指向。如果不需要改变 this 指向，则传 null。
- 其他参数：fn1 函数的实参。

```js
function handleClick(){
    alert(this.name);
}

...
//class组件中
this.handleClick=handleClick.bind(this);
```



# 高阶函数

概念：当 函数 A 接收函数 B 作为**参数**，或者把函数 C 作为**返回值**输出时，我们称 函数 A 为高阶函数。即高阶函数是对其他函数进行操作的函数。

```js
//把其他函数作为参数
function fn1(a, b, callback) {
    console.log(a + b);
    // 执行完上面的 console.log() 语句之后，再执行下面这个 callback 函数。也就是说，这个 callback 函数是最后执行的。
    callback && callback();
}

fn1(10, 20, function () {
    console.log('我是最后执行的函数');
});


//把其他函数作为返回值
function fn2() {
    let a = 20;

    return function () {
        console.log(a);
    };
}

const foo = fn2(); // 执行 fn1() 之后，会得到一个返回值。这个返回值是函数
foo();
```



# 闭包

变量根据作用域分为两种：全局与局部。

* 函数内部可以访问全局与局部变量。
* 函数外部只能访问全局变量。
* 函数子女高兴完毕后，其作用域内的局部变量会被销毁。

那么如何在函数外部访问函数内的局部变量？---闭包。

## 闭包概念

闭包：指有权**访问**另一个函数作用域中**变量**的**函数**。闭包是一种函数，也可以理解为闭包是一种现象。

简单理解就是：如果**这个作用域可以访问另外一个函数内部的局部变量**，那就产生了闭包（此时，你可以把闭包理解成是一种现象）；而另外那个作用域所在的函数称之为**闭包函数**。

```js
function fn1() {
    let a = 10;

    function fn2() {
        console.log(a);
    }
    fn2();
}

fn1();//打印结果为 10
```

上述代码，函数fn2()的作用域访问量fn1中的局部变量，那么此时fn1中就产生了闭包。fn1称为闭包函数。

## 闭包的作用

延伸变量的作用范围。

```js
function fn1() {
    let a = 20;

    function fn2() {
        console.log(a);
    }
    return fn2;
}

const foo = fn1(); // 执行 fn1() 之后，会得到一个返回值。foo 代表的就是 fn2 函数
foo();//执行foo会打印，结果为 20

function fn3(){
    let i=0;
    return function(){
        console.log(i++);
    }
}

var foo1=fn3();
var foo2=fn3();
foo1();// 0
foo1();// 1
foo2();// 0
```

易知产生了闭包。

一般来说，在 fn1 函数执行完毕后，它里面的变量 a 会立即销毁。但此时由于产生了闭包，所以 **fn1 函数中的变量 a 不会立即销毁，因为 fn2 函数还要继续调用变量 a**。只有等所有函数把变量 a 调用完了，变量 a 才会销毁。



# 面向对象

JS中的面向对象，是基于原型的面向对象。

ES6中，新引入了Class（类）和Extends（继承）来实现面向对象。

### 基于原型的面向对象

JS 中的对象（Object）是依靠构造器（constructor）和原型（prototype）构造出来的。



## 创建自定义对象的几种方法

1. 对象字面量

   ```js
   const obj2 = {
               name: "千古壹号",
               age: 26,
               isBoy: true,
               // 还可以存放一个嵌套的对象
               test: {
                   id: 123,
                   tel: 180
               }
   		    //我们还可以在对象中增加一个方法。以后可以通过obj.sayName()的方式调用这个方法
               sayName: function() {
                   console.log(this.name);
               }
           };
   
   console.log(JSON.stringify(obj));
   ```

2. 工厂模式

   ```js
   /*
    * 使用工厂方法创建对象
    *  通过该方法可以大批量的创建对象
    */
   function createPerson(name, age, gender) {
       //创建一个新的对象
       var obj = new Object();
       //向对象中添加属性
       obj.name = name;
       obj.age = age;
       obj.gender = gender;
       obj.sayName = function () {
           alert(this.name);
       };
       //将新的对象返回
       return obj;
   }
   
   var obj2 = createPerson('猪八戒', 28, '男');
   var obj3 = createPerson('白骨精', 16, '女');
   var obj4 = createPerson('蜘蛛精', 18, '女');
   ```

   **弊端：**

   使用工厂方法创建的对象，使用的构造函数都是 Object。**所以创建的对象都是 Object 这个类型，就导致我们无法区分出多种不同类型的对象**

   

3. 构造函数

   ```js
   //利用构造函数自定义对象
   var stu1 = new Student('smyh');
   console.log(stu1);
   stu1.sayHi();
   
   var stu2 = new Student('vae');
   console.log(stu2);
   stu2.sayHi();
   
   // 创建一个构造函数
   function Student(name) {
       this.name = name; //this指的是当前对象实例【重要】
       this.sayHi = function () {
           console.log(this.name + '厉害了');
       };
   }
   ```

   **构造函数**：是一种特殊的函数，主要用来创建和初始化对象，也就是为对象的成员变量赋初始值。它与 `new` 一起使用才有意义。

   构造函数习惯上首字母大写。

   

   ### **构造函数**与普通函数的区别：

   * 调用方式不同：普通函数直接调用，构造函数需要配合new关键字来调用。
   * this指向不同：
     	1. 函数形式调用，this指向window。
      	2. 方法形式调用，指向调用方法的对象。
      	3. 以构造函数形式调用时，指向新创造的实例对象

   ### new 一个构造函数的执行流程

   new 在执行时，会做下面这四件事：

   （1）开辟内存空间，在内存中创建一个新的空对象。

   （2）让 this 指向这个新的对象。

   （3）执行构造函数里面的代码，给这个新对象添加属性和方法。

   （4）返回这个新对象（所以构造函数里面不需要 return）。
   
   ### instanceof
   
   使用 instanceof 可以检查**一个对象是否为一个类的实例**。



# 对象的基本操作

1. 创建对象

2. 向对象添加属性

3. 获取对象属性   可以使用`对象["属性名"]  `与`对象.属性名`两种方式。

4. 修改对象属性

5. 删除对象睡醒   `delete 对象名.属性名`

6. in运算符：通过该运算符可以检查一个对象中是否含有指定的属性。如果有则返回 true，没有则返回 false。`'属性名' in 对象;`

7. for of : 数组遍历

   ```js
   let arr1 = [2, 6, 8, 5];
   
   for (let value of arr1) {
       console.log(value);
   }//2 6 8 5
   ```

   for ... of 的循环可以避免我们开拓内存空间，增加代码运行效率，所以建议大家在以后的工作中使用 for…of 遍历数组。

   注意，上面的数组中，`for ... of`获取的是数组里的值；如果采用`for ... in`遍历数组，则获取的是 index 索引值。

8. for in :遍历对象属性

   `for ... in`主要用于遍历对象，不建议用来遍历数组。（但也可以用来遍历数组）

