# 边界情况

## 访问组件或元素

1. 访问根组件实例：每个new Vue() 实例的子组件中，其根实例可通过`$root`访问。

2. 访问父组件实例：`$parent` property 可以用来从一个子组件访问父组件的实例，与$root类似

3. 访问子组件实例或子元素：可以通过 `ref` 这个 attribute 为子组件赋予一个 ID 引用，并在需要时通过`this.$refs.componame`访问组件实例。

4. 依赖注入：

   `provide` 选项允许我们指定我们想要**提供**给后代组件的数据/方法。在父组件内部的 `getMap` 方法：

   ```
   provide: function () {
     return {
       getMap: this.getMap
     }
   }
   ```

   然后在任何后代组件里，我们都可以使用 `inject` 选项来接收指定的我们想要添加在这个实例上的 property：

   ```
   inject: ['getMap']
   ```

   **以把依赖注入看作一部分“大范围有效的 prop**。

   特点：

   - 祖先组件不需要知道哪些后代组件使用它提供的 property
   - 后代组件不需要知道被注入的 property 来自哪里
   - 非响应式



## 程序化事件监听器

- 通过`$emit(eventName, eventHandler)`触发父组件的自定义事件
- 通过 `$on(eventName, eventHandler)` 侦听一个事件
- 通过 `$once(eventName, eventHandler)` 一次性侦听一个事件
- 通过 `$off(eventName, eventHandler)` 停止侦听一个事件

## 递归组件

组件是可以在它们自己的模板中调用自身的。不过它们只能通过 `name` 选项来做这件事：name: 'unique-name-of-my-component'

当你使用 `Vue.component` 全局注册一个组件时，这个全局的 ID 会自动设置为该组件的 `name` 选项。

```
Vue.component('unique-name-of-my-component', {
  // ...
})
```

稍有不慎，递归组件就可能导致无限循环：

```
name: 'stack-overflow',
template: '<div><stack-overflow></stack-overflow></div>'
```

类似上述的组件将会导致“max stack size exceeded”错误，所以请确保递归调用是条件性的 (例如使用一个最终会得到 `false` 的 `v-if`)。

## 手动强制更新

[`$forceUpdate`](https://cn.vuejs.org/v2/api/#vm-forceUpdate) 来做这件事



# 混入

## 基础

混入（mixin)提供了一种非常灵活的方式，**用于分发组件中的可复用功能**。一个混入对象可以包含任意组件选项。

当组件使用混入对象时，所有混入对象的选项被“混合”进入该组件本身的选项。

```js
// 定义一个混入对象
var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}

// 定义一个使用混入对象的组件
var Component = Vue.extend({
  mixins: [myMixin]
})

var component = new Component() // => "hello from mixin!"
```

当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行合并。

如，

* **数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先**。

* 同名钩子函数将合并为一个数组，因此都将被调用。**混入对象的钩子将在组件自身钩子之前被调用**。

  ```js
  
  var mixin = {
    created: function () {
      console.log('混入对象的钩子被调用')
    }
  }
  
  new Vue({
    mixins: [mixin],
    created: function () {
      console.log('组件钩子被调用')
    }
  })
  
  // => "混入对象的钩子被调用"
  // => "组件钩子被调用"
  ```

* 值为对象的选项，例如 `methods`、`components` 和 `directives`，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。

  ```js
  var mixin = {
    methods: {
      foo: function () {
        console.log('foo')
      },
      conflicting: function () {
        console.log('from mixin')
      }
    }
  }
  
  var vm = new Vue({
    mixins: [mixin],
    methods: {
      bar: function () {
        console.log('bar')
      },
      conflicting: function () {
        console.log('from self')
      }
    }
  })
  
  vm.foo() // => "foo"
  vm.bar() // => "bar"
  vm.conflicting() // => "from self"
  ```

  `Vue.extend()` 也使用同样的策略进行合并。

## 全局混入

混入也可以进行全局注册。使用时格外小心！一旦使用全局混入，它将影响**每一个**之后创建的 Vue 实例。



# 自定义指令

```js
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})


// 注册局部指令，组件中，接收一个directives选项
directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  }
}
```

## 钩子函数

一个指令定义对象可以提供如下几个钩子函数 (均为可选)：

- `bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
- `inserted`：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
- `update`：所在组件的 VNode 更新时调用，**但是可能发生在其子 VNode 更新之前**。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
- `componentUpdated`：指令所在组件的 VNode **及其子 VNode** 全部更新后调用。
- `unbind`：只调用一次，指令与元素解绑时调用。

### 钩子函数参数

* `el`：指令所绑定的元素，可以用来直接操作 DOM。

* `binding`：一个对象，包含以下 property：

    * `name`：指令名，不包括 `v-` 前缀。
    * `value`：指令的绑定值，例如：`v-my-directive="1 + 1"` 中，绑定值为 `2`。
    * `oldValue`：指令绑定的前一个值，仅在 `update` 和 `componentUpdated` 钩子中可用。无论值是否改变都可用。
    * `expression`：字符串形式的指令表达式。例如 `v-my-directive="1 + 1"` 中，表达式为 `"1 + 1"`。
    * `arg`：传给指令的参数，可选。例如 `v-my-directive:foo` 中，参数为 `"foo"`。
    * `modifiers`：一个包含修饰符的对象。例如：`v-my-directive.foo.bar` 中，修饰符对象为 `{ foo: true, bar: true }`。

* `vnode`：Vue 编译生成的虚拟节点。移步 [VNode API](https://cn.vuejs.org/v2/api/#VNode-接口) 来了解更多详情。
* `oldVnode`：上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中可用。

除el外，其他参数应该都只读