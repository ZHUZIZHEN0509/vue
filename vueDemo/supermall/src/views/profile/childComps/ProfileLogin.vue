<template>
  <div>
    <div id="profile-login" v-if="isShow">
      <div><img class="login-img" src="~assets/img/profile/avatar.svg"></div>
      <div class="login-div">
        <span class="login-span" @click="loginClick">登录</span>
        <span>/</span>
        <span @click="registerClick">注册</span></div>
    </div>
    <div id="login" v-else>
      <div class="div-img">
        <img v-if="imgShow" class="login2-img" src="~assets/img/common/nantou.svg">
        <img v-else class="login2-img" src="~assets/img/common/nvtouxiang.svg">
      </div>
      <div class="text">
        <span class="span-text">昵称：{{this.$store.state.userMessage.name}}</span>
        <span class="span-psd">账号：{{this.$store.state.userMessage.phoneNumber}}</span>
      </div>
    </div>
  </div>

</template>

<script>


  export default {
    name: "ProfileLogin",
    data(){
      return{
        Name1: 'mylogin',
        Name2: 'myregister',
        vshow: true
      }
    },
    computed:{
      isShow(){
        return this.vshow === this.$store.state.vshow;
      },
      imgShow(){
        if(this.$store.state.userMessage.gender === '男'){
          return true
        }
        return false
      }
    },
    methods:{
      loginClick(){
         this.$router.push('/login/'+ this.Name1);

      },
      registerClick(){
         this.$router.push('/register/'+ this.Name2);

      }


    }
  }
</script>

<style scoped>
   #profile-login{
     background-color: #ff8198;
     display: flex;
     height: 120px;
     line-height: 120px;
   }
   #login{
     background-color: #ff8198;
     display: flex;
     height: 120px;
     z-index: 999;
   }
  .login-img{
    width: 62px;
    height: 62px;
    margin-left: 25px;
    border: 2px solid #666666;
    border-radius: 50%;
  }
  .login-div{
    color: white;
    font-size: 18px;
  }
  .login-span{
    margin-left: 15px;
    color: white;
  }


  .div-img{
    padding: 20px 0;
  }
  .login2-img{
    width: 62px;
    height: 62px;
    margin-left: 25px;
    border: 2px solid #666666;
    border-radius: 50%;
  }
  .text{
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    padding: 30px 0;
  }
  .span-text{
    color: white;

  }
  .span-psd{
    color: white;


  }

</style>
