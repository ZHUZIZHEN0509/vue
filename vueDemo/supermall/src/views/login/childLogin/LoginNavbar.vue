<template>
  <div>
    <nav-bar class="login-navbar">
      <div slot="left" @click="imgClick"><img src="~assets/img/common/back.svg"></div>
      <div slot="center">登录</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "LoginNavbar",
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
  .login-navbar{
    background-color: #ff8198;
    color: white;
  }
</style>
