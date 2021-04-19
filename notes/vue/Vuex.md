# Vuex

Vuex的核心就是store仓库。store基本上是个容器，包含着应用中的大部分状态。

与单纯的全局对象不同：

1. Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
2. 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地**提交 (commit) mutation**。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。



## state

Vuex 使用单一状态树，用一个对象就包含了全部对象的应用层级状态，作为一个唯一数据源而存在，这意味着，每个应用仅仅包含一个store实例。

### vue组件中获取Vuex状态

从store实例中读取状态的最简单方法就是在computed中返回某个状态。

`注意`：若数据是在data里获取的，则不会动态改变；

若数据在computed里获取，会发生变化。

## getters

在getters通过属性访问时（末尾没有括号），会返回结果，作为Vue的响应式系统的一部分缓存。

在getters在通过方法访问时，每次都会进行调用，而不会缓存（返回）结果。

## mutations

更改Vuex中store的唯一方法就是提交mutation

每个 mutation 都有一个字符串的 **事件类型 (type)** 和 一个 **回调函数 (handler)**。这个回调函数就是我们实际进行状态更改的地方，并且`它会接受 state 作为第一个参数。`还可接受额外的参数payload

```js
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state, payload) { // increment为事件类型
      // 变更状态
      state.count += payload;
    }
  }
})
```

不能直接调用一个 mutation handler。这个选项更像是事件注册：“当触发一个类型为 `increment` 的 mutation 时，调用此函数。”要唤醒一个 mutation handler，你需要以相应的 type 调用 **store.commit** 方法

```js
store.commit('increment')
```

**mutations必须是同步函数**



## actions

Action 类似于 mutation，不同在于：

- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。

Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 `context.commit` 提交一个 mutation，或者通过 `context.state` 和 `context.getters` 来获取 state 和 getters。

Action 通过 `store.dispatch` 方法触发：

```js
store.dispatch('increment')
```

你在组件中使用 `this.$store.dispatch('xxx')` 分发 action，或者使用 `mapActions` 辅助函数将组件的 methods 映射为 `store.dispatch` 调用（需要先在根节点注入 `store`）