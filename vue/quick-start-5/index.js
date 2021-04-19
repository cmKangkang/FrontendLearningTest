const User={
  template:`
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
    `,
  data:function(){
    return {}
  }
}

const UserProfile={
  template:`<p>this is user profile</p>`,
}

const UserPost={
  template:`<p>this is user post</p>`,
}

const routes=[
  {
    path:'/user/:id',component:User,children:[
      {
        path:'',component:User,
      },
      {
        path:'profile',component:UserProfile,
      },
      {
        path:'post',component:UserPost,
      }
    ],
  }
];

const router=new VueRouter({
  routes:routes,
});

new Vue({
  el:'#app',
  router:router,
  methods:{
    handleClick:function(id, name){
      this.currentUrl=`/user/${id}/${name}`;
    }
  },
  data:{
    currentUrl:'',
  },
  watch:{
    currentUrl(){
      this.$router.push({path:this.currentUrl});
    }
  }
})

