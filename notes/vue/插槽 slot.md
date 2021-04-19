# 插槽 slot

Vue实现了一套内容分发的api，将`slot`作为承载内容分发内容的出口。——slot是承载分发内容的出口。

**slot 其实就是能够让我们在父组件中添加内容到子组件的‘空间’**

## slot（父组件在子组件<slot></slot>内插入内容）

```js
//子组件 ： (假设名为：ebutton)
<template>
  <div class= 'button'>
      <button>  </button>
  </div>
</template>

//父组件：（引用子组件 ebutton）
<template>
  <div class= 'app'>
     <ebutton> </ebutton>
  </div>
</template>
```

直接在父组件的<ebutton></ebutton>中添加内容是不会再页面上显示的，插槽就用于解决这个问题。

```js
//子组件 ： (假设名为：ebutton)
<template>
  <div class= 'button'>
      <button></button>
      <slot></slot>       //slot 可以放在任意位置。（这个位置就是父组件添加内容的显示位置）
  </div> 
</template>

//父组件：（引用子组件 ebutton）
<template>
  <div class= 'app'>
     <ebutton>
     	<span>my name is kk</span>
      </ebutton>
  </div>
</template>
```

此时<span>中的内容就会在子组件中得到渲染。



## 编译作用域（父组件在子组件slot中插入data）

父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。

```js
<template>
  <div class= 'app'>
     <ebutton> {{ parent }}</ebutton>
  </div>
</template>

new Vue({
  el:'.app',
  data:{
    parent:'父组件'
  }
})
```

## 后备内容（slot设置默认值）

有时我没有在父组件内添加内容，那么 slot就会显示默认值，如：

```js
//子组件 ： (假设名为：ebutton)
<template>
  <div class= 'button'>
      <button>  </button>
      <slot> submit </slot>
  </div>
</template>

// 父组件中
// 当使用
<ebutton></ebutton>
// 时，将显示submit

// 当使用
<ebutton>save</ebutton>
// 时，save将取代submit（默认值）显示
```

## 具名插槽（多个slot对应插入内容）

有时候，也许子组件内的slot不止一个，那么我们如何在父组件中，精确的在想要的位置，插入对应的内容呢？ 给插槽命一个名即可，即添加name属性。

```js
//子组件 ： (假设名为：ebutton)
<template>
  <div class= 'button'>
      <button>  </button>
      <slot name= 'one'> 这就是默认值1</slot>
      <slot name='two'> 这就是默认值2 </slot>
      <slot name='three'> 这就是默认值3 </slot>
  </div>
</template>
```

父组件通过v-slot : name 的方式添加内容：

```js
//父组件：（引用子组件 ebutton）
<template>
  <div class= 'app'>
     <ebutton> 
        <template v-slot:one> 这是插入到one插槽的内容 </template>
        <template v-slot:two> 这是插入到two插槽的内容 </template>
        <template v-slot:three> 这是插入到three插槽的内容 </template>
     </ebutton>
  </div>
</template>
```

当然 vue 为了方便，书写 v-slot:one 的形式时，可以简写为 #one

## 作用域插槽（父组件在slot处使用子组件data——v-slot）

在父组件中不能直接使用子组件内的数据，这是受限于编译作用域的，但是我们可以使用v-slot来解决这个问题。

```js
//子组件 ： (假设名为：ebutton)
<template>
  <div class= 'button'>
      <button>  </button>
      <slot name= 'one' :value1='child1'> 这就是默认值1</slot>    //绑定child1的数据
      <slot :value2='child2'> 这就是默认值2 </slot>  //绑定child2的数据，这里我没有命名slot
  </div>           
</template>

new Vue({
  el:'.button',
  data:{
    child1:'数据1',
    child2:'数据2'
  }
})

//父组件：（引用子组件 ebutton）
<template>
  <div class= 'app'>
     <ebutton> 
        <template v-slot:one = 'slotone'>  
           {{ slotone.value1 }}    // 通过v-slot的语法 将子组件的value1值赋值给slotone 
        </template>
        <template v-slot:default = 'slottwo'> 
           {{ slottwo.value2 }}  // 同上，由于子组件没有给slot命名，默认值就为default
        </template>
     </ebutton>
  </div>
</template>
```

