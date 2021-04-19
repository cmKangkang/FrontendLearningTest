
Vue.component('button-counter',{
  data:function(){
    return {
      count:0,
    }
  },
  template:`<button @click='count++'>Click me for {{count}} times.</button>`
});

Vue.component('blog-post',{
  props:['post'],
  template:`
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <div v-html="post.content"></div>
    </div>
  `,
});

new Vue({
  el:'#app1',
})

new Vue({
  el:'#app2',
  data:{
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ]
  }
});

Vue.component('blog-post-button-1', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button>
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
});

// 使用emit向外发射事件与参数
Vue.component('blog-post-button-2', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text',0.2)">
        Enlarge text
      </button>
      <button v-on:click="$emit('narrow-text',0.1)">
        Narrrow text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})

new Vue({
  el:"#app3 div[name='one']",
  data:{
    posts:[
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ],
    postFontSize:1,
  },
});

new Vue({
  el:"#app3 div[name='two']",
  data:{
    posts:[
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ],
    postFontSize:1,
  },
  methods:{
    onEnlargeText:function(ev){
      this.postFontSize+=ev;
    },
  }
});

Vue.component('custom-input',{
  props:['value'],
  template:`
  <input
    :value='value'
    @input='$emit("input", $event.target.value)'
  />
  `,
});

new Vue({
  el:'#app3 div[name="three"]',
  data:{
    searchText:'',
  }
});

/**================ 局部注册 ================= */
let componentA={
  template:`
    <button @click='console.log("clicked.")'>click me</button>
  `,
};

let componentB={
  props:['value'],
  template:`
    <input
      type='text'
      @input='$emit("input",$event.target.value)
      :value='value'
    >
  `,
};

let componentC={
  template:`
    <input type='text' value='input'>
  `
}

Vue.component('com-d',{
  props:{
    id:Number,
    name:[String, Number],
    age:{
      type:Number,
      default:20,
    }
  },
  template:`
    <p>id: {{id}}, name: {{name}}, age: {{age}}</p>
  `,
})

new Vue({
  el:'#app4 div[name="one"]',
  components:{
    'component-a':componentA,
    'com-b':componentB,
    'component-c':componentC,
  },
  data:{
    bval:'',
  }
});

new Vue({
  el:'#app4 div[name="two"]',
  data:{
    info:{
      id:1009,
      name:'ll',
      age:20,
    }
  }
})