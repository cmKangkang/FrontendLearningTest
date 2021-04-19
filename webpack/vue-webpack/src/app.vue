<template>
  <div class="container">
    <div id="top">
      <h1>{{title}}</h1>
    </div>
    
    <div class="container">
      <div id="left">
        <div class="menueitem" v-for="(menu, idx) in menue" :key="idx">{{menu}}</div>
      </div>
      <div id="right">
        <div class="paraghs" v-for="(con, idx) in content" :key="idx">{{con}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'webpack learning',
      des: 'author rkk',
      menue:[
        'item 1',
        'item 2',
        'item 3',
        'item 4'
      ],
      content:[
        'ndsuweijhneb wdwefnbuwejfnjwbrfbwibcywbefncwyucu',
        'ndxuwnedcfbnwndcfwuujhyefdyurvbf xaybdquiyhndsuqdhnqdhn',
        'hbncuiqwfcbchdbnasxbnHFBCUWEBFCWQBNCUQEWNDXUNQIC XQ CUQNC ',
      ]

    }
  }
}
</script>

<style>
  h1 {
    color: red;
  }
  .des {
    color:cadetblue;
    font-size: 16px;
  }
</style>

<style lang="less">
@import url('./style/main.less');
</style>