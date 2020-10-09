<template>
  <div class="rg-content">
    <div class="form-group">
      <span>昵称：</span>
      <input type="text" placeholder="请输入昵称！(5)" v-model.lazy="name" maxlength="5">
    </div>
    <div class="form-group group2">
      <span>手机号码：</span>
      <input type="text" placeholder="请输入手机号码！(11)" v-model.lazy="phoneNumber" maxlength="11">
    </div>
    <div class="form-group">
      <span>密码：</span>
      <input type="password" placeholder="请输入密码！(16)" v-model.lazy="password" maxlength="16">
    </div>
    <div class="form-group group4">
      <span>确人密码：</span>
      <input type="text" placeholder="请输入再次输入密码!" v-model.lazy="rePassword" maxlength="16">
    </div>
    <div class="form-group group5">
      <span>性别：</span>
      <input type="radio" value="male" v-model="gender" checked>男
      <input type="radio" value="female" class="radio" v-model="gender">女
    </div>
    <div class="rg-button">
      <button class="btn btn-danger button" @click="btnRegister">注册</button>
    </div>
  </div>
</template>

<script>
  import { registerAccount } from "network/login";

  export default {
    name: "RegisterContent",
    data(){
      return{
        name: '',
        phoneNumber: '',
        password: '',
        rePassword: '',
        gender: ''
      }
    },
    methods:{
          //注册
          btnRegister(){
            registerAccount(this.name,this.phonelength,this.validPassword,this.gender).then( res => {
              console.log(res);
              if(res.status === 'SUCCESS'){
                this.$toast.show('注册成功',2000);
              }else if(res.status === 'FALSE'){
                this.$toast.show('注册失败',2000);
              }
            })
            if(this.validPassword === this.password && this.password!='' && this.rePassword!='' && this.name!=''
               && this.phoneNumber!= '' && this.phoneNumber.toString().length === 11){
              this.$router.push('/profile');
            }

          }
        },
        computed:{
          validPassword(){
            return this.password === this.rePassword ? this.password : this.$toast.show('两次密码输入不一致！',2000);
          },
          phonelength(){
            return this.phoneNumber.toString().length === 11 ? this.phoneNumber : this.$toast.show('请检查您输入的电话号码！',2000);
          }
    }
  }
</script>

<style scoped>
  .rg-content{
    background-color: #ff5777;
    height: 100%;
    color: white;
    position: relative;
    bottom: 0px;
    z-index: 999;
  }
  .radio{
    margin-left: 15px;
  }
  .rg-button{
    display: flex;
    justify-content: center;
    position: relative;
    top: 40px;
  }
  .button{
    width: 180px;
  }
  .form-group{
    display: flex;
    justify-content: center;
    position: relative;
    top: 45px;
    padding-top: 5px;
  }
  .group2{
    padding-right: 34px;
  }
  .group4{
    padding-right: 34px;
  }
  .group5{
    line-height: 10px;
  }
</style>
