let app1=new Vue({
  el:'#app1',
  data:{
    url:'https://baidu.com',
    name:'button1',
    attr1:'17685391008',
    input1:'',
    input2:'',
  },
  methods:{
    handleClick:function(){
      // alert(ev.target.name)
      alert(this.name);
    },
    getAttr2:function(){//求出attr2
      return this.attr1.split('').reverse().join('');
    },
  },
  computed:{//computed：用于存放计算属性
    //下面方法，若attr1变化，则attr2会立即执行，变化
    //计算属性基于响应式因爱进行缓存，旨在相关依赖变化时它们才会重新求值。
    // 若不希望有缓存，则可使用方法

    // 计算属性默认只有getter，不过也可提供一个setter
    attr2:function(){
      return this.attr1.split('').reverse().join('');
    },

    fullname:{
      get:function(){
        return this.input1+' '+this.input2;
      },
      set:function(name){
        let n=name.split(' ');
        this.input1=n[0];
        this.input2=n[1];
      }
    }

  }
});

var app2=new Vue({
  el:'#app2',
  data:{
    isActive:true,
    isNorm:true,

    activeColor:'green',
    fontSize:40,

    styleObject:{
      color:'purple',
      fontSize:'50px',
    },

    styleObj:{
      color:'blue',
    }
  },
  methods:{
    handleClick:function(){
      this.isActive=!this.isActive;
    }
  }
});

let app3=new Vue({
  el:'#app3',
  data:{
    flag:false,
    ok:true,
  }
});

let app4=new Vue({
  template:"<div v-if='true'><h1>Title</h1><p>Paragraph 1</p><p>Paragraph 2</p></div>",

  el:'#app4',

})

let app5=new Vue({
  el:'#app5',
  data:{
    arr:[
      'kk','ll','dd','yy'
    ],
  }
});

let app6=new Vue({
  el:'#app6',
  data:{
    list:[{id: 1, name: '奔驰', ctime: new Date}, {id: 2, name: '大众', ctime: new Date}],
  }
})

let app7=new Vue({
  el:'#app7',
  data:{
    arr:[
      {f:true,n:'kk'},
      {f:false,n:'ll'},
      {f:true,n:'LL'}
    ],
    sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
  },
  computed:{
    arrFilter:function(){
      return this.arr.filter((item)=>{
        return item.f;
      })
    }
  },
  methods:{
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
});

Vue.component('todo-item',{
  template:'\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props:['title'],
})

new Vue({
  el:'#app8',
  data:{
    nextTodoText:'',
    todos:[
      {id:1,title:'wash the dishes'},
      {id:2,title:'deal with the trash'},
    ],
    nextTodoId:3,
  },
  methods:{
    addNew:function(){
      this.todos.push({
        id:this.nextTodoId++,
        title:this.newTodoText
      });
      this.newTodoText='';
    }
  }
});

new Vue({
  el:'#app9',
  data:{
    counter:0,
    msg:'hello world',
    arr:[1,2,3,4],
  },

  methods:{
    say:function(){
      alert(this.msg);
    },
    warn:function(ev){
      alert(ev.currentTarget,ev.target);
    },
    handleClick:function(ev){
      alert('div clicked');
      console.log(ev.currentTarget,ev.target)
    },
    handleClick1:function(){
      alert('div clicked');
    },
    handleClick2:function(){
      alert('li clicked');
    }
  }
});

new Vue({
  el:'#app10',
  data:{

  },
  methods:{
    submit:function(){
      alert('submit');
    },
    keyup:function(ev){
      console.log(ev.key);
    }
  }
})

new Vue({
  el:'#app11',
  data:{
    msg:'',
    mmsg:'',
    checked:false,
    checkedNames:[],
    picked:'',
    selected:'',
    mselected:[],
    toggle:'no',
  }
})
