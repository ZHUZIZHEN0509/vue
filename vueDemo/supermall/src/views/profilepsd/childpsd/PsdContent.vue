<template>
  <div class="psd-content">
    <div class="form-group">
      <span>账号：</span>
      <input type="text" placeholder="请输入账号！" v-model.lazy="phone">
    </div>
    <div class="form-group group2">
      <span>旧密码：</span>
      <input type="text" placeholder="请输入旧密码！" v-model.lazy="oldPassword">
    </div>
    <div class="form-group group3">
      <span>新密码：</span>
      <input type="password" placeholder="请输入新密码！" v-model.lazy="newPassword">
    </div>
    <div class="form-group group4">
      <span>确人密码：</span>
      <input type="text" placeholder="请输入再次输入新密码!" v-model.lazy="againPassword">
    </div>
    <div class="rg-button">
      <button class="btn btn-danger button" @click="newPsdClick">确人修改</button>
    </div>
  </div>
</template>

<script>
  import { sendPassword } from "network/login";

  export default {
    name: "PsdContent",
    data(){
      return{
        phone: '',
        oldPassword: '',
        newPassword: '',
        againPassword: ''
      }
    },
    methods:{
      newPsdClick(){
          sendPassword(this.phone,this.oldPassword,this.newPassword).then( res => {
            console.log(res);
            this.$toast.show(res.msg,2000);
          })
      }
    }
  }
</script>

<style scoped>
   .psd-content{
     background-color: #ff5777;
     height: 100%;
     position: relative;
     bottom: 0px;
     z-index: 999;
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
     padding-right: 16px;
   }
   .group3{
     padding-right: 16px;
   }
   .group4{
     padding-right: 34px;
   }
</style>
