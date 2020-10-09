<template>
  <div id="app">
    <keep-alive exclude="Detail,Login,Register,Changepsd">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from 'components/context/mainTabbar/MainTabBar'

export default {
  name: 'App',
  components: {
     MainTabBar
  }
}
</script>

<style>
  /*1.导入base.css*/
  @import "assets/css/base.css";
</style>
