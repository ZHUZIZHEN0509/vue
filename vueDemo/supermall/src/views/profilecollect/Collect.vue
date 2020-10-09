<template>
  <div class="pfc-collect">
    <collect-navbar></collect-navbar>
    <collect-list></collect-list>
  </div>
</template>

<script>
  import CollectNavbar from './childCollect/CollectNavbar'
  import CollectList from './childCollect/CollectList'

  export default {
    name: "collect",
    components: {CollectList, CollectNavbar}
  }
</script>

<style scoped>

</style>
