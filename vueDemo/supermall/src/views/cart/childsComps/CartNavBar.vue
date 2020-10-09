<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
      <div slot="right" @click="clearClick">清空</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import { mapGetters } from 'vuex'

  export default {
    name: "CartNavBar",
    components:{
      NavBar
    },
    computed:{
      // cartLength(){
        // return this.$store.state.cartList.length;
        // return this.$store.getters.cartLength
      // }(['cartLength','cartList']);
      //两种语法
      // ...mapGetters([
      //   'cartLength',
      //   'cartList'
      // ])
      ...mapGetters({
        length: 'cartLength',
        list: 'cartList'
      })
    },
    methods:{
      clearClick(){
        this.list.splice(0,this.length);
      }
    }
  }
</script>

<style scoped>
  .nav-bar{
    background-color: #ff8198;
    color: #fff;
  }

</style>
