# React组件api

- 设置状态：setState

  - ```
    setState(object nextState[, function callback])
    ```

  - **nextState**，将要设置的新状态，该状态会和当前的**state**合并

  - **callback**，可选参数，回调函数。该函数会在**setState**设置成功，且组件重新渲染后调用。

  合并nextState和当前state，并重新渲染组件。setState是React事件处理函数中和请求回调函数中触发UI更新的主要方法

  ```js
  handleClick() {    this.setState(function(state) {      return {clickCount: state.clickCount + 1};    });
  ```
  

---



- 替换状态：replaceState

  ```
  replaceState(object nextState[, function callback])
  ```

  - **nextState**，将要设置的新状态，该状态会替换当前的**state**。
  - **callback**，可选参数，回调函数。该函数会在**replaceState**设置成功，且组件重新渲染后调用。

  **replaceState()**方法与**setState()**类似，但是方法只会保留**nextState**中状态，原**state**不在**nextState**中的状态都会被删除 

  ---

- 

- 设置属性：setProps

- 替换属性：replaceProps

- 强制更新：forceUpdate

  ```
  forceUpdate([function callback])
  ```

  **callback**，可选参数，回调函数。该函数会在组件**render()**方法调用后调用。

  forceUpdate()方法会使组件调用自身的render()方法重新渲染组件，组件的子组件也会调用自己的render()。但是，组件重新渲染时，依然会读取this.props和this.state，如果状态没有改变，那么React只会更新DOM。

  ---

  

- 获取DOM节点：findDOMNode

  ```
  DOMElement findDOMNode()
  ```

  - 返回值：DOM元素DOMElement

  如果组件已经挂载到DOM中，该方法返回对应的本地浏览器 DOM 元素。当**render**返回**null** 或 **false**时，**this.findDOMNode()**也会返回**null**。从DOM 中读取值的时候，该方法很有用，如：获取表单字段的值和做一些 DOM 操作。

- ---

  

- 判断组件挂载状态：isMounted
```

```





# React AJAX

React 组件的数据可以通过 componentDidMount 方法中的 Ajax 来获取，当从服务端获取数据时可以将数据存储在 state 中，再用 this.setState 方法重新渲染 UI。

当使用异步加载数据时，在组件卸载前使用 componentWillUnmount 来取消未完成的请求





# 表单事件

```js
class HelloMessage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {value: 'Hello Runoob!'};
      this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(event) {
    this.setState({value: event.target.value});//setStae();设置属性。
  }
    
  render() {
    var value = this.state.value;
    return <div>
            <input type="text" value={value} onChange={this.handleChange} /> 
            <h4>{value}</h4>
           </div>;
  }
}
ReactDOM.render(
  <HelloMessage />,
  document.getElementById('example')
);
```



# 传递到子组件

```js
class Content extends React.Component {
  render() {
    return  <div>
            <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} /> 
            <h4>{this.props.myDataProp}</h4>
            </div>;
  }
}
class HelloMessage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {value: 'Hello Runoob!'};
      this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    var value = this.state.value;
    return <div>
            <Content myDataProp = {value} 
              updateStateProp = {this.handleChange}></Content>
           </div>;
  }
}
ReactDOM.render(
  <HelloMessage />,
  document.getElementById('example')
);
```

