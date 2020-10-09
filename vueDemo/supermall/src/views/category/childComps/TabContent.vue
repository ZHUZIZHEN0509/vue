<template>
  <div id="tab-content">
      <div v-for="(item,index) in subcategories.list" :key="index" class="tab-item">
        <a :href="item.link">
          <img class="img" :src="item.image" alt="">
          <span class="span">{{item.title}}</span>
        </a>
      </div>
  </div>
</template>

<script>


  export default {
    name: "TabContent",
    props:{
      subcategories:{
        type: Object,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
   #tab-content{
     text-align: center;
     font-size: 12px;
     margin: 20px 20px;
     display: flex;
     flex-wrap: wrap;
   }
   .tab-item{
     flex: 1;
     padding: 3px 0;
     margin-top: 5px;
   }
  .img{
    width: 90px;
    height: 90px;
  }
  .span{
    margin-top: 15px;
  }
</style>
