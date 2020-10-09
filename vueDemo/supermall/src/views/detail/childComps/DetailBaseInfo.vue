<template>
  <div v-if="Object.keys(goods).length !== 0" class="info-base">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
    <span class="new-price">{{goods.newPrice}}</span>
    <span class="old-price">{{goods.oldPrice}}</span>
    <span class="discount">{{goods.discount}}</span>
  </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props:{
      goods:{
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .info-base{
    /*border: 1px solid red;*/
    margin-top: 13px;
    color: #999;
    padding: 0px 8px;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-title{
    color: black;
  }
  .info-price{
    display: flex;
    margin-top: 13px;
    padding-bottom: 15px;
  }
  .new-price{
    font-size: 23px;
    color: var(--color-high-text);

  }
  .old-price{
    padding-top: 10px;
    padding-left: 3px;
    text-decoration: line-through;
  }
  .discount{
    padding: 4px 8px;
    font-size: 9px;
    background-color: var(--color-high-text);
    color: #ffffff;
    margin-bottom: 16px;
    border-radius: 8px;
    margin-left: 5px;
  }
  .info-price span{
    /*border: 1px solid black;*/
  }
  .info-other{
    display: flex;
  }
  .info-other span{
    flex: 1;
    text-align: center;
    font-size: 14px;
    /*border: 1px solid red;*/
  }
  .info-service{
    /*border: 1px solid blueviolet;*/
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
  }
  .info-service img{
    width: 14px;
    height: 14px;
    /*border: 1px solid red;*/
    margin-bottom: 4px;
  }
  .info-service span{
    font-size: 13px;
    color: black;
    margin-top: 5px;
  }
</style>
