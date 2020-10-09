<template>
  <div id="change-psd">
    <psd-navbar></psd-navbar>
    <psd-content></psd-content>
  </div>
</template>

<script>
  import PsdNavbar from './childpsd/PsdNavbar'
  import PsdContent from './childpsd/PsdContent'

  export default {
    name: "changepsd",
    components: {
      PsdNavbar,
      PsdContent
    }
  }
</script>

<style scoped>
   #change-psd{
     height: 100vh;
     overflow: hidden;
     background-color: #ff5777;
   }
</style>
