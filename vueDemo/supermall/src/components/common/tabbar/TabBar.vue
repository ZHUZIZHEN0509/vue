<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  /*水平分布*/
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    /*box-shadow阴影 x偏移  y偏移  z模糊程度  rgba透明度(r,g,b,透明度)*/
    box-shadow: 0px -3px 1px rgba(100,100,100,.2);
  }
</style>
