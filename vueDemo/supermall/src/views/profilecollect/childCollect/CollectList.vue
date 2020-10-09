<template>
  <div>
    <collect-listitem v-for="(item,index) in collectList" :key="index" :collectItem="item" :index="index"></collect-listitem>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import CollectListitem from './CollectListitem'

  export default {
    name: "CollectList",
    components:{
      CollectListitem
    },
    computed:{
      ...mapGetters(['collectList'])
    }
  }
</script>

<style scoped>

</style>
