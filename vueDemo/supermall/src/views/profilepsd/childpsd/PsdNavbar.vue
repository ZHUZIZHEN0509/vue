<template>
  <div class="psd-navbar">
    <nav-bar>
      <div slot="left" @click="imgClick"><img src="~assets/img/common/back.svg"></div>
      <div slot="center">修改密码</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "PsdNavbar",
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
   .psd-navbar{
     background-color: #ff8198;
     color: white;
     height: 44px;
   }
</style>
