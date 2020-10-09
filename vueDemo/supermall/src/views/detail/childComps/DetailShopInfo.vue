<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left">
        <div class="shop-fans">
          {{shop.fans | countFilter}}
        </div>
        <div class="shop-count">
          总销量
        </div>
      </div>
      <div class="shop-middle-2">
        <div class="shop-goodCount">{{shop.goodsCount}}</div>
        <div class="shop-text">全部宝贝</div>
      </div>
      <div class="shop-score">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="shop-item2" :class="{'shop-item2-score':item.isBetter}">{{item.score}}</td>
            <td class="shop-item3" :class="{'shop-item3-better':item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>


  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props:{
      shop:{
        type: Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      countFilter(value){
        if(value < 10000){
           return value;
        }
        return (value/10000).toFixed(1) + '万';
      }
    }
  }
</script>

<style scoped>
 .shop-info{
   padding: 15px 5px;
   /*border: 1px solid red;*/
 }
  .shop-top{
    display: flex;
  }
  .shop-top img{
    width: 45px;
    height: 45px;
  }
  .title{
    /*border: 1px solid black;*/
    padding: 8px 0px;
    margin-left: 10px;
  }

  .shop-middle{
    /*border: 1px solid rebeccapurple;*/
    display: flex;
    padding: 0px 10px;
  }
  .shop-middle-left{
    /*border: 1px solid black;*/
    text-align: center;
    color: black;
    margin-left: 5px;
    font-size: 18px;
  }
  .shop-fans{
    /*border: 1px solid olivedrab;*/
    padding-top: 5px;

  }
  .shop-count{
    /*border: 1px solid red;*/
    padding-top: 5px;
  }
  .shop-middle-2{
    /*border: 1px solid black;*/
    text-align: center;
    font-size: 18px;
    color: black;
    margin-left: 15px;
  }
  .shop-goodCount{
    /*border: 1px solid red;*/
    padding-top: 5px;
  }
  .shop-text{
    /*border: 1px solid red;*/
    padding-top: 5px;
  }
  .shop-score{
    /*border: 1px solid red;*/
    font-size: 13px;
    margin-left: 30px;
    text-align: center;
  }
  .shop-score table td{
    padding: 3px 2px;
  }
  .shop-item2{
    color: #5ea732;
  }
  .shop-item2-score{
    color: #f13e3a;
  }
  .shop-item3 span{
    background-color: #5ea732;
    color: #fff;
  }
  .shop-item3-better span{
    background-color: #f13e3a;
  }
  .shop-bottom{
    /*border: 1px solid red;*/
    text-align: center;
    margin-top: 15px;
  }
  .enter-shop{
    /*border: 1px solid black;*/
    font-size: 14px;
    line-height: 30px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    border-radius: 10px;
    display: inline-block;

  }


</style>
