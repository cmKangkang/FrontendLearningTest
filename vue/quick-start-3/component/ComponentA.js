let componentA={
  template:`
    <button @click='console.log("clicked.")'>click me</button>
  `,
};
export default{
  components:{
    ComponentA:componentA,
  }
}