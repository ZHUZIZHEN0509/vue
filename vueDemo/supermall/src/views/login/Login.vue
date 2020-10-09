<template>
  <div id="login">
    <login-navbar></login-navbar>
    <login-content></login-content>
  </div>
</template>

<script>
  import LoginNavbar from './childLogin/LoginNavbar'
  import LoginContent from './childLogin/LoginContent'

  export default {
    name: "Login",
    components: {
      LoginContent,
      LoginNavbar
    }
  }
</script>

<style scoped>
  #login{
    height: 100vh;
    overflow: hidden;
  }
</style>
