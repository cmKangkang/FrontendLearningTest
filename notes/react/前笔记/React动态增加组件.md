# React动态增加组件

* 组件的复用，如列表，按钮等

一个组件多次出现，比如新闻列表等。

用数组循环渲染组件，添加事件发生时给数组添加一个值，重新渲染即可。

```js
const BlackComponent = () => <div>我是黑色组件</div>
export default class extends React.Component{
    constructor(props) {
        super(props);
        this.state = {comps : []}
    }
    
    render() {
        const {comps } = this.state;
        return (
                        
            
            <div>
            <button onClick={() => this.setState({comps: comps.concat([Date.now()])})}>加组件</button>
                {comps.map(comp => {
                    return <BlackComponent key={comp} />
                })}
</div>
        );
    }
}
```

