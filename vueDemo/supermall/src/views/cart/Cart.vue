<template>
  <div class="cart">
    <cart-nav-bar></cart-nav-bar>

    <scroll class="content" ref="scroll">
      <cart-list></cart-list>
    </scroll>

     <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import CartNavBar from './childsComps/CartNavBar'
  import CartList from  './childsComps/CartList'
  import CartBottomBar from  './childsComps/CartBottomBar'

  import Scroll from 'components/common/scroll/Scroll'

  export default {
    name: "cart",
    components:{
      CartList,
      CartNavBar,
      Scroll,
      CartBottomBar
    },
    activated() {
      this.$refs.scroll.refresh();
    }
  }
</script>

<style scoped>
   .cart{
     height: 100vh;
   }
   .content{
     height: calc(100% - 44px - 49px - 40px);
     overflow: hidden;
   }
</style>
