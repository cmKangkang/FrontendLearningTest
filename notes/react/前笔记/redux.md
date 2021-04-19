# redux

管理React项目的状态

关键词有：state、action、reducer



state：

* Domain state ：服务器端的数据，比如：获取用户的信息，商品的列表等等
* UI state：决定当前UI决定展示的状态，比如：弹框的显示与隐藏，受控组件等等。
* App state：app级别的状态，比如：当前是否请求loading等



Action:

* action 的本质是一个Javascript的普通对象
* Action对象内部必须要有一个type属性来表示要执行的动作
* 多数情况下，这个type会被定义成字符串常量
* 除了type字段之外，action的结构随意定义
* 在项目中，更多的喜欢使用**action创建函数**，即创建action的地方。



Reducer：

* 本质是一个函数，用于响应发送过来的action，经过处理，把state发送给Store

* 在reducer函数中，需要return返回值，这样store才能收到数据。

* reducer函数会接收 两个参数，第一个是初始state，第二个是action。

  ```js
  //reducer
  const initState={...};
  rootReducer=(state=initState,action)=>{... return {...}}
  ```

   



Store:

* Store是把action与reducer联系到一起的对象

* 主要功能是：

  * 维持应用的state
  * 提供getState方法获取state
  * 提供dispatch方法发送action
  * 通过subscribe来注册监听
  * 通过subscribe来注册监听

  ```js
  //store创建语法
  import {createStore} from "redux";
  const store =createStore(reducer);
  ```

  