<template>
  <div class="pf-content">
    <div class="one-content" @click="collectClick">
       <img src="~assets/img/common/favorite.svg">
       <span class="span-text">我的收藏</span>
    </div>
    <div class="two-content" @click="cartClick">
       <img src="~assets/img/common/shopping_c.svg">
       <span class="span-text">我的购物车</span>
    </div>
    <div class="two-content" @click="passwordClick">
      <img src="~assets/img/common/password.svg">
      <span class="span-text">修改密码</span>
    </div>
    <div class="two-content" @click="exitClick">
      <img src="~assets/img/common/tuichudenglu.svg">
      <span class="span-text">退出登录</span>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "ProfileContent",
    data(){
      return{
        collect: 'mycollect',
        psd: 'changepsd',
        msg: 'mymsg'
      }
    },
    computed:{
      ...mapGetters(['cartList','cartLength','collectList','collectLength'])
    },
    methods:{
      collectClick(){
        this.$router.push('/collect/'+ this.collect);
      },
      cartClick(){
        this.$router.push('/cart')
      },
      passwordClick(){
        this.$router.push('/password/'+ this.psd);
      },
      exitClick(){
        this.$store.commit('exitShow');
        console.log(this.$store.state.vshow);
        this.$store.state.code = '';

        this.cartList.splice(0,this.cartLength);
        this.collectList.splice(0,this.collectLength);
      }
    }
  }
</script>

<style scoped>
   .pf-content{

   }
  .one-content{
    height: 60px;
    border-top: 10px solid rgba(100, 100, 100, .1);
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    background-color: white;
    line-height: 45px;
    padding-left: 15px;
  }
  .span-text{
    height: 50px;
    line-height: 40px;
    font-size: 14px;
  }
  .two-content{
    height: 50px;
    line-height: 45px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    background-color: white;
    padding-left: 15px;
  }
  img{
    width: 30px;
    height: 30px;
  }
</style>
