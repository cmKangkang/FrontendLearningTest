# watcher 状态侦听

watch 函数可侦听数据的变化，并可定义方法对此做出响应。

computed也基于watcher

```js
watch: {//侦听number属性的变化
    number: function(newValue) {
      gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue });
    }
  }

//// grammer
new Vue ({
    data: {
        a: { x: 1 }
        b: { y: 1 }
    },
    watch: {
        a() {
            // do something
        },
        'a.x'() {
            // do something
        },
        a: {
            hander: 'methodName',
            deep: Boolean
            immediate: Boolean
        },
        a: 'methodName',
        a: ['methodName', 'methodName']
    }
});

```



# router

##  起步

1. html或template，使用router-link 与 router-view 配合，搭配js代码，实现路由。

   ```html
     <h1>Hello App!</h1>
     <p>
       <!-- 使用 router-link 组件来导航. -->
       <!-- 通过传入 `to` 属性指定链接. -->
       <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
       <router-link to="/foo">Go to Foo</router-link>
       <router-link to="/bar">Go to Bar</router-link>
     </p>
     <!-- 路由出口 -->
     <!-- 路由匹配到的组件将渲染在这里 -->
     <router-view></router-view>
   ```

   ```js
   // 1. 定义 (路由) 组件。
   // 可以从其他文件 import 进来
   const Foo = { template: '<div>foo</div>' }
   const Bar = { template: '<div>bar</div>' }
   
   // 2. 定义路由
   // 每个路由应该映射一个组件。 其中"component" 可以是
   // 通过 Vue.extend() 创建的组件构造器，
   const routes = [
     { path: '/foo', component: Foo },
     { path: '/bar', component: Bar }
   ]
   
   // 3. 创建 router 实例，然后传 `routes` 配置
   // 你还可以传别的配置参数, 不过先这么简单着吧。
   const router = new VueRouter({
     routes // (缩写) 相当于 routes: routes
   })
   
   // 4. 创建和挂载根实例。
   // 记得要通过 router 配置参数注入路由，
   // 从而让整个应用都有路由功能
   const app = new Vue({
     router
   }).$mount('#app')
   
   ```

   总结：定义组件--》定义路由--》创建router实例--》创建与挂载根实例



2. 动态路由匹配

   使用动态路径参数：以冒号开头

   ```js
   const user={
       template:'',
   }
   
   const router=new VueRouter({
       routes:[//创建router实例
           {path:'/user/:id', component:user},
       ]
   });
   ```

   可以在一个路由中设置多段“路径参数”，对应的值都会设置到 `$route.params` 中。

   | 模式                          | 匹配路径            | $route.params                          |
   | ----------------------------- | ------------------- | -------------------------------------- |
   | /user/:username               | /user/evan          | `{ username: 'evan' }`                 |
   | /user/:username/post/:post_id | /user/evan/post/123 | `{ username: 'evan', post_id: '123' }` |

   除了 `$route.params` 外，`$route` 对象还提供了其它有用的信息，例如，`$route.query` (如果 URL 中有查询参数)、`$route.hash` 等等。



3. 响应路由参数变化：

   路由参数变化时，组件间跳转，例如从 `/user/foo` 导航到 `/user/bar`，原来的组件实例会被复用。因为这两个实例都渲染同个组件，复用更加高效。这意味着组建的生命周期钩子函数不会再被调用。

   **复用组件时，想对路由参数变化做出响应的话，可以简单的watch，检测`$route`对象，或者使用`beforeRouteUpdate`

   ```js
   const User = {
     template: '...',
     watch: {
       $route(to, from) {
         // 对路由变化作出响应...
       }
     }
   }
   
   const User = {
     template: '...',
     beforeRouteUpdate (to, from, next) {
       // react to route changes...
       // don't forget to call next()
     }
   }
   ```

    

4. 有通配符‘*’通常用于客户端404错误。通配符应该放最后

   ```js
   {
     // 会匹配所有路径
     path: '*'
   }
   {
     // 会匹配以 `/user-` 开头的任意路径
     path: '/user-*'
   }
   
   
   ```

## 路由嵌套

一个组件被渲染到`<router-view>`内，同时这个组件也可包含自己的`<router-view>`。

要在嵌套的出口中渲染组件，需要在VueRouter的参数中使用`children`配置：

```html
<div id="app">
  <router-view></router-view>
</div>
```

```js
const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
};
const UserProfile={
    
};
const UserPost={
    
};
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User,
      children: [
          {
              //可添加一个空路由，在初始状态时显示一些页面
              path:'',
              component:User
          },
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
});

new Vue({
    el:'#app',
    router:router,
});
```



## 编程式导航

除了使用<router-link>创建a标签来定义导航链接，还可以借助router的实例方法通过编写代码来实现。

## `router.push(location, onComplete?, onAbort?)`

在vue实例内部，可通过$router访问路由实例。因此可以调用`this.$router.push`

当你点击 `<router-link>` 时，这个方法会在内部调用，所以说，点击 `<router-link :to="...">` 等同于调用 `router.push(...)`。

| 声明式                    | 编程式             |
| ------------------------- | ------------------ |
| `<router-link :to="...">` | `router.push(...)` |

```js
// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由
router.push({ name: 'user', params: { userId: '123' }})

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})
```

**若提供`path`，则`params`会被忽略

```js
const userId = '123'
router.push({ name: 'user', params: { userId }}) // -> /user/123
router.push({ path: `/user/${userId}` }) // -> /user/123
// 这里的 params 不生效
router.push({ path: '/user', params: { userId }}) // -> /user，params被忽略
```

同样的规则也适用于 `router-link` 组件的 `to` 属性。



在 2.2.0+，<u>可选的在 `router.push` 或 `router.replace` 中提供 `onComplete` 和 `onAbort` 回调作为第二个和第三个参数。这些回调将会在导航成功完成</u>  (在所有的异步钩子被解析之后) <u>或终止</u> (导航到相同的路由、或在当前导航完成之前导航到另一个不同的路由) <u>的时候进行相应的调用。在 3.1.0+，可以省略第二个和第三个参数，此时如果支持 Promise，`router.push` 或 `router.replace` 将返回一个 Promise。</u>

**注意**： 如果目的地和当前路由相同，只有参数发生了改变 (比如从一个用户资料到另一个 `/users/1` -> `/users/2`)，你需要使用 [`beforeRouteUpdate`](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#响应路由参数的变化) 来响应这个变化 (比如抓取用户信息)。

---

## `router.replace(location, onComplete?, onAbort?)`

跟 `router.push` 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

| 声明式                            | 编程式                |
| --------------------------------- | --------------------- |
| `<router-link :to="..." replace>` | `router.replace(...)` |

## `router.go(n)`

这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 `window.history.go(n)`



以上操作与 `window.history.pushState`、 `window.history.replaceState` 和 `window.history.go`十分相似，它们是模仿的。

还有值得提及的，Vue Router 的导航方法 (`push`、 `replace`、 `go`) 在各类路由模式 (`history`、 `hash` 和 `abstract`) 下表现一致。