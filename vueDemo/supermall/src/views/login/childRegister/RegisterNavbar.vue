<template>
  <div class="rg-navbar">
    <nav-bar>
      <div slot="left" @click="imgClick"><img src="~assets/img/common/back.svg"></div>
      <div slot="center">注册</div>
    </nav-bar>
  </div>
</template>

<script>
  import  NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "RegisterNavbar",
    components:{
      NavBar
    },
    methods:{
      imgClick(){
        this.$router.back();
      }
    }
  }
</script>

<style scoped>
  .rg-navbar{
    background-color: #ff8198;
    color: white;
  }
</style>
