<template>
  <div id="profile">
    <nav-bar class="nav-bar"><div slot="center">我的</div></nav-bar>
    <profile-login></profile-login>
    <profile-content></profile-content>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  import ProfileLogin from './childComps/ProfileLogin'
  import ProfileContent from './childComps/ProfileContent'

  export default {
    name: "profile",
    components:{
      ProfileContent,
      NavBar,
      ProfileLogin
    }
  }
</script>

<style scoped>
  .nav-bar{
    background-color: #ff8198;
    color: white;
    border-bottom: 1px solid papayawhip;
  }
</style>
