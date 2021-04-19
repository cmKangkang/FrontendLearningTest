
// 定义组件，可外部引入
const Foo={template:'<div>foo</div>'};
const Bar={template:'<div>bar</div>'};

// 定义路由。
// 每个路由映射一个组件。其中component为组件
// 路由嵌套现在暂不讨论
const myroutes=[
  {path:'/foo',component:Foo},
  {path:'/bar',component:Bar}
];

// 创建router实例，通过router传递配置
const myrouter=new VueRouter({
  routes:myroutes,
})

// 创建与挂载根实例
// 通过router配置参数注入路由
const app=new Vue({
  router:myrouter,
}).$mount('#app')
