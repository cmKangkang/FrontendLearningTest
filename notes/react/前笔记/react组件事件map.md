React生命周期方法



在具有许多组件的应用程序中，在销毁时释放组件所占用的资源非常重要。

每当 Clock 组件第一次加载到 DOM 中的时候，我们都想生成定时器，这在 React 中被称为**挂载**。

**componentDidMount()**

同样，每当 Clock 生成的这个 DOM 被移除的时候，我们也会想要清除定时器，这在 React 中被称为**卸载**。

**componentWillUnmount()**



在组件输出到 DOM 后会执行 **componentDidMount()** 钩子，我们就可以在这个钩子上设置一个定时器。

this.timerID 为定时器的 ID，我们可以在 **componentWillUnmount()** 钩子中卸载定时器。





# 数据流向

自顶向下流：任何状态始终由某些特定组件所有，并且从该状态导出的任何数据或 UI 只能影响树中下方的组件。



自底向上流：



# React Props

state 和 props 主要的区别在于 **props** 是不可变的，而 state 可以根据与用户交互来改变。这就是为什么有些容器组件需要定义 state 来更新和修改数据。 而子组件只能通过 props 来传递数据。





# state和props

父组件能够将其state作为参数传给子组件作为props



# bind绑定以及箭头函数回调

jsx回调函数，一定要带this，以及一定要在state中绑定，或者箭头函数调用。

this.handleLoginClick = this.handleLoginClick.bind(this);    this.handleLogoutClick = this.handleLogoutClick.bind(this);

通过 bind 方式向监听函数传参，在类组件中定义的监听函数，事件对象 e 要排在所传递参数的后面



# 条件渲染

通过if或条件运算符，可以选择只渲染一部分

若return null，则不会渲染；



# React 列表 & Keys

遍历numbers：

const listItems = numbers.map((numbers) =>  <li>{numbers}</li> );

**key**

加上key：组件接收数组参数，每个列表元素分配一个 key，不然会出现警告 **a key should be provided for list items**，Keys 可以在 DOM 中的某些元素被增加或删除的时候帮助 React 识别哪些元素发生了变化。因此你应当给数组中的每一个元素赋予一个确定的标识。一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串。通常，我们使用来自数据的 id 作为元素的 key:

```
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
```

当元素没有确定的 id 时，你可以使用他的序列号索引 index 作为 key：

```
const todoItems = todos.map((todo, index) =>
  // 只有在没有确定的 id 时使用
  <li key={index}>
    {todo.text}
  </li>
);
```

果你提取出一个 ListItem 组件，你应该把 key 保存在数组中的这个 **<ListItem />** 元素上，而不是放在 ListItem 组件中的 子组件**<li>** 元素上，因为元素的 key 只有在它和它的兄弟节点对比时才有意义。

```
const content = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title} />
);
```

Post 组件可以读出 props.id，但是不能读出 props.key。key 会作为给 React 的提示，但不会传递给你的组件。