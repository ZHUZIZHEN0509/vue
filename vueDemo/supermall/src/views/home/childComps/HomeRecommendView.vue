<template>
  <div class="recommend">
    <div v-for="item in recommends" class="divimg">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommendView",
    //1.首先需获取数据
    props:{
      recommends:{
        type: Array,
        default(){
          return [];
        }
      }
    }
  }
</script>

<style scoped>
.recommend{
  display: flex;
  width: 100%;
}
.divimg{
  flex: 1;
  margin-top: 3px;
  text-align: center;
  padding: 10px 0px 15px 0px;
  border-bottom: 8px solid #eee;
}
  div a img{
    width: 4em;
    height: 4em;
    margin-bottom: 5px;
  }
  div a  div{
    font-size: 0.5em;
    color: black;
    text-align: center;

  }
</style>
