<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot  name="item-icon"></slot></div>
    <div v-else ><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "TabBarItlem",
    props:{
      path: String,
      activeColor:{
        type: String,
        default: 'red'
      }
    },
    data(){
      return{
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : { }
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path);
      }
    }
  }
</script>

<style scoped>
  /*进行平分*/
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  /*设置图片大小*/
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    /*解决图片下面默认三个像素*/
    vertical-align: middle;
    margin-bottom: 2px;
  }

  /*4.如果为true时显示的颜色*/
  .active{
    color: red;
  }
</style>
