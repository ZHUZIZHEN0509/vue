<template>
  <div class="collect-navbar">
    <nav-bar>
      <div slot="left" @click="backClick"><img src="~assets/img/common/back.svg"></div>
      <div slot="center">我的收藏</div>
      <div slot="right" @click="cleanClick">清空</div>
    </nav-bar>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "CollectNavbar",
    components:{
      NavBar
    },
    computed:{
      ...mapGetters(['collectList','collectLength'])
    },
    methods:{
      backClick(){
        this.$router.back();
      },
      cleanClick(){
        this.collectList.splice(0,this.collectLength);
      }
    }
  }
</script>

<style scoped>
  .collect-navbar{
    background-color: #ff8198;
    color: white;
  }
</style>
