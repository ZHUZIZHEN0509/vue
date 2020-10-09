<template>
  <div id="shop-item">
    <div class="item-img">
      <img :src="collectItem.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{collectItem.title}}</div>
      <div class="item-desc">商品描述:{{collectItem.desc}}</div>
      <div class="info-bottom">
        <div class="item-price">￥{{collectItem.price}}</div>
      </div>
      <div class="collect" @click="collectClick">
        <div class="item-collect">移出收藏夹</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "CollectListitem",
    props:{
      collectItem:{
        type: Object,
        default(){
          return {}
        }
      },
      index:{
        type: Number,
        default(){
          return {}
        }
      }
    },
    computed:{
      ...mapGetters(['collectList'])
    },
    methods:{
      collectClick(index){
        this.collectList.splice(index,1);
      }
    }
  }
</script>

<style scoped>
  #shop-item{
    width: 100%;
    padding: 10px 30px;
    display: flex;
    border-bottom: 2px solid #ff8198;
  }
  .item-img{
    padding: 5px;
  }
  .item-img img{
    width: 70px;
    height: 70px;
    border-radius: 5px;
  }
  .item-info{
    padding: 5px 10px;
    position: relative;
    left: 3px;
    overflow: hidden;

  }
  .item-title{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: black;

  }
  .item-desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #666666;
  }
  .info-bottom{
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 3px;
  }
  .item-price{
    color: orangered;
  }
  .item-selector check-button{
    width: 100%;
    height: 100%;
  }
  .collect{
    font-size: 12px;
    color: white;
    display: flex;
    text-align: center;


  }
  .item-collect{
    width: 70px;
    height: 25px;
    align-items: center;
    background-color: red;
    border: 1px solid red;
    border-radius: 7px;
    position: relative;
    left: 80px;
    top: -19px;
    padding: 3px 0;
  }
</style>
