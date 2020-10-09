<template>
  <div class="login-input">
    <div class="input-group">
      <span class="input-group-addon">账号：</span>
      <input type="text" placeholder="请输入账号！"  v-model.lazy="name" maxlength="11">
    </div>
    <div class="input-group">
      <span>密码：</span>
      <input type="password" placeholder="请输入密码！" v-model.lazy="password">
    </div>
    <div class="pf-button">
      <button class="btn btn-primary button" @click="btnLogin">登录</button>
    </div>
  </div>

</template>

<script>
  import { loginAccount } from "network/login";

  export default {
    name: "LoginContent",
    data(){
      return{
        name: '',
        password: '',
        message: {}
      }
    },
    methods:{
      btnLogin(){
        loginAccount(this.name, this.password).then( res => {
          console.log(res);
          if(res.code === 1){
            this.$store.commit("heardShow");
            console.log(this.$store.state.vshow);

            this.$toast.show(res.msg,2000);
            this.$store.commit('loginMessage',res);
            this.$router.back();
          }else if(res.code === 0){
            this.$toast.show(res.msg,2000);

          }

        })
      }
    }
  }
</script>

<style scoped>
  .login-input{
    height: 100%;
    background-color: #ff5777;
    color: white;
    z-index: 99;
    position: relative;
    bottom: 0;
    overflow: hidden;
  }
  .input-group{
    display: flex;
    justify-content: center;
    position: relative;
    top: 100px;
    padding-top: 5px;
  }
  .pf-button{
    display: flex;
    justify-content: center;
    position: relative;
    top: 120px;
  }
  .button{
    width: 180px;
  }
</style>
