## 基本含义

1. async 是一个修饰符，由async定义的函数会直接返回一个Promise对象resolve的值，因此对async函数可以直接进行then操作，返回的值即为then方法的传入函数。

2. await关键字，只能放在async内部，作用是`获取promise中返回的内容`，**获取的是resolve或者reject的值**。

   若await后面不是一个promise的返回值，那么该语句将会按照同步程序返回值处理。

   ```js
   function temp(n) {
     return new Promise((res, rej) => {
       res(n);
     });
   }
   
   async function test() {
     let s1 = temp(1); // 返回的是promise对象
     s1.then(res => {
         console.log(res); // 1
     })
       
       
     let s2 = await temp(2); // 返回的是 2，即resolve的参数
     s2.then(res => { // 这里会报错，因为await temp(2)返回的是resolve的值，而不是promise对象。
       console.log(res);
     })
   }
   
   test();
   ```

   