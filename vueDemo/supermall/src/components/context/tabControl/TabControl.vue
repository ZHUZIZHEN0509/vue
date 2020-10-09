<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
         class="divspan" :class="{active: index === currentIndex}"
         @click="currentClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
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
      currentClick(index){
        this.currentIndex = index;
        //传出
        this.$emit('tabClick',index);
      }

    }
  }
</script>

<style scoped>
.tab-control{
  display: flex;
  width: 100%;
}
.divspan{
  width: 100%;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
  div span{
    flex: 1;
    text-align: center;
    font-size: 15px;
    padding: 5px;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 3px solid var(--color-tint);
  }


</style>
