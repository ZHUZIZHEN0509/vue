<template>
  <Scroll id="tab-menu">
     <div class="menu-item" v-for="(item,index) in categories" :key="index"
          :class="{active: index === currentIndex}"
          @click="menuClick(index)">
       {{item.title}}
     </div>
  </Scroll>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  export default {
    name: "TabMenu",
    components:{
      Scroll
    },
    props:{
      categories:{
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        currentIndex: 0
      }
    },
    methods:{
      menuClick(index){
        console.log("menu被点击了");
        this.currentIndex = index;
        this.$emit("menuClick",index);
      }
    }
  }
</script>

<style scoped>
   #tab-menu{
     background-color: #f6f6f6;
     width: 100px;
     height: 100%;
     box-sizing: border-box;
   }
   .menu-item{
     height: 45px;
     line-height: 45px;
     font-size: 16px;
     text-align: center;
     border: 1px solid #999;
   }
  .active{
    font-weight: 700;
    color: var(--color-high-text);
    background: #fff;
    border-left: 3px solid var(--color-high-text);
  }
</style>
