<template>
  <div id="register">
    <register-navbar></register-navbar>
    <register-content></register-content>
  </div>
</template>

<script>
  import RegisterNavbar from './childRegister/RegisterNavbar'
  import RegisterContent from './childRegister/RegisterContent'

  export default {
    name: "Register",
    components: {RegisterContent, RegisterNavbar}
  }
</script>

<style scoped>
  #register{
    height: 100vh;
    overflow: hidden;
  }
</style>
