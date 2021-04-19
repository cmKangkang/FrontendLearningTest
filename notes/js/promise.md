# promise

1. promise是一个构造函数，new Promise()返回一个promise对象，接受一个执行函数作为参数，该执行函数有两个形参：resolve与reject。

   ```js
   const promise = new Promise((resolve, reject) => {
    // 异步处理
    
    // 处理结束后，调用resolve或reject   
   })
   ```

2. promise相当于一个状态机

   三种状态：

   * pending
   * fulfilled
   * reject

   promise对象初始化状态为pending

   当调用resolve()（成功时），会由pending --> fulfilled

   当调用reject()（失败时），会由pending --> reject

   `注意`:

   promsie状态 只能由 pending => fulfilled/rejected, 一旦修改就不能再变

3. promise 对象方法

   1. then方法注册 当resolve成功或reject失败的回调函数

      ```js
      promise.then(onFulfilled, onRejected)
      ```

   2. resolve成功，onFulfilled会被调用

   3. reject失败，onRejected会被调用

   4. promise.catch 在链式写法中捕获then中的异常

      ```csharp
      promise.catch(onRejected)
      // 相当于
      promise.then(null, onRrejected);
      
      // 注意，onRejected不能捕获onFulfilled中的异常
      // 链式写法
      promise.then(onFulfilled)
             .catch(onRrejected);   
      ```

4. promise chain

   promise.then方法每次调用都返回一个新的promise对象，所以可以用链式写法。

5. promise静态方法

   1. Promise.resolve()返回一个fulfilled状态的promise对象。

      ```js
      Promise.resolve('hello')
      // 相当于
      const promise = new Promise(( , res) => {
          resovle('hello');
      })
      ```

   2. Promise.reject() 返回一个rejected状态的promise对象

      ```js
      Promise.reject('hello');
      // 相当于
      new Promise( (res, rej) =>{
          reject('hello');
      })
      ```

   3. Promise.all()接收一个promise对象数组为参数

      （只有全部为resolve才会调用 通常会用来处理 多个并行异步操作）

      ```js
      const p1 = new Promise((resolve, reject) => {
          resolve('p1');
      });
      
      const p2 = new Promise((resolve, reject) => {
          resolve('p2');
      });
      
      const p3 = new Promise((resolve, reject) => {
          resolve('p3');
      });
      
      Promise.all([p1, p2, p3]).then(data => { 
          console.log(data); // [1, 2, 3] 结果顺序和promise实例数组顺序是一致的
      }, err => {
          console.log(err);
      });
      ```

   4. Promise.race() 接收一个promise对象数组作为参数

      （Promise.race 只要有一个promise对象进入 FulFilled 或者 Rejected 状态的话，就会继续进行后面的处理。）

      `方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。`

      就像竞赛，谁先到达终点就选谁执行。

      ```js
      const p1 = new Promise((res, rej) => {
        setTimeout(res, 1000, '1000');
        setTimeout(rej, 300, '300')
      });
      
      const p2 = new Promise((res, rej) => {
        setTimeout(res, 100, '100');
      });
      
      Promise.race([p1]).then(data => {
        console.log('res: ' + data);
      }).catch(data => {
        console.log('rej: ' + data);
      });
      
      Promise.race([p1, p2]).then(data => {
        console.log('res: ' + data);
      }).catch(data => {
        console.log("rej: " + data);
      });
      
      // 控制台输出：
      // res: 100
      // rej: 300
      ```

      

