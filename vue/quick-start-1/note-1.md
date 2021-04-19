# vue 

## vue指令

vuejs cdn：
    ```js
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    ```

1. `v-bind` 属性被称为指令。指令带有前缀`v-`，以表示他们是vue提供的特殊attribute。

2. 可把文本绑定到DOM文本或attribute，还可绑定到dom结构。

3. `v-for` 指令可以绑定数组的数据来渲染一个项目列表。

    ```html
    <div id="app-4">
    <ol>
        <li v-for="todo in todos">
        {{ todo.text }}
        </li>
    </ol>
    </div>
    ```

4. `v-on` 指令 可为元素添加事件监听器。

    ```js
    <div id="app-5">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">反转消息</button>
    </div>


    var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
        }
    }
    })
    ```

5. v-model命令，可实现表单输入和应用状态的双向绑定。

## 组件化应用构建

在vue中，组件本质上是一个拥有预定义选项的vue实例。
注册组件：
    ```js
    // 定义名为 todo-item 的新组件
        Vue.component('todo-item', {
        template: '<li>这是个待办项</li>'
        })

        var app = new Vue(...
    ```
可用他构建另一个组件模板：

    ```html
    <ol>
        <!-- 创建一个 todo-item 组件的实例 -->
        <todo-item></todo-item>
    </ol>
    ```