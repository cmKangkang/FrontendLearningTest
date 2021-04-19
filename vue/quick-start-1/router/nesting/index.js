const User={
  template:`<div class='user'>
    <h2>User {{ $route.params.id }}</h2>
    <router-view></router-view>
  </div>`,
}

const UserProfile={
  template:`
  this is userprofile
  `,
}

const UserPost={
  template:`
  this is userpost
  `,
}

const myRouter=new VueRouter({
  routes:[
    { path:'/user/:id',component:User,
      children:[
        {path:'',         component:UserProfile},
        {path:'profile',  component:UserProfile},
        {path:'post',     component:UserPost}
      ]
  }
  ]
});

const app=new Vue({
  router:myRouter,
}).$mount();