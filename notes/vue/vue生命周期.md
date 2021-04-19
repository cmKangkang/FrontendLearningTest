# vue生命周期

Vue实例有着完整的生命周期，即：开始创建、初始化数据、编译模板、挂载dom、渲染--->更新--->渲染等一系列过程。从创建到销毁的过程就是生命周期。

分为三个阶段：**初始化、运行中、销毁**。

![img](https://upload-images.jianshu.io/upload_images/11370083-f279314aef6741db.jpg?imageMogr2/auto-orient/strip|imageView2/2/format/webp)

![img](https://upload-images.jianshu.io/upload_images/11370083-ab96d006045028d4.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/700/format/webp)

## 细节

`beforeCreated`:

创建前。在数据观测和事件配置之前被调用，此时组件的对象还未创建、el和data并未开始初始化，所以无法访问methods、data、computed等。

`created`：

创建后。实例创建完之后被调用。调用完后，已经完成的工作有：数据观测、属性和方法的运算、watch/event事件回调、data数据的初始化，但el并未指定。因为挂载阶段并未开始，故$el属性目前不可见。

在该方法中，可以调用methods中的方法，获取与改变data数据，获取computed中的属性等，且也可通过vue的响应式绑定将修改体现在页面上。

但是建议不要在生命周期内发送Ajax请求，因为该周期没有什么方法来对实例化过程进行拦截。建议在路由组件钩子`beforeRouterEnter`中完成。

`beforeMount`：

挂载开始之前被调用。相关的render函数被首次调用（虚拟dom）。完成配置如下：编译模板，把data里面的数据和模板生成html，完成了el和data 初始化，注意此时还没有挂在html到页面上。

`mounted`：

挂载完成，也就是模板中的HTML渲染到HTML页面中，此时一般可以做一些ajax操作，mounted只会执行一次。

---

`beforeUpdate`：

数据更新之前被调用，发生在虚拟dom重新渲染和打补丁之前，可以在该钩子中进一步地改变状态，不会触发附加的重渲染过程。

`updated`：

更新后。在由于数据更改导致地虚拟DOM重新渲染和打补丁只会调用，调用时，组件DOM已经更新，所以可以执行依赖于DOM的操作，然后在大多是情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环，该钩子在服务器端渲染期间不被调用

---

`beforeDestroy`：

在实例销毁之前调用，实例仍然完全可用：

1. 这一步还可以用this来获取实例；
2. 一般在这步做一些重置的操作，比如清除掉组件中的定时器和监听的dom事件。

`destroyed`：

在实例销毁之后调用，调用后，所有的事件监听器会被移除，子实例也会被销毁，该钩子在服务端渲染期间不被调用。

