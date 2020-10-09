<template>
  <div class="shop-item">
    <!--{{product}}-->
    <div class="item-selector">
      <check-button :is-checked="cartItem.checked" @click.native="checkClick"></check-button>
    </div>
    <div class="item-img">
      <img :src="cartItem.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{cartItem.title}}</div>
      <div class="item-desc">商品描述:{{cartItem.desc}}</div>
      <div class="info-bottom">
        <div class="item-price">￥{{cartItem.price}}</div>
        <div class="item-count">x{{cartItem.count}}</div>
      </div>
      <span class="item-delete" v-show="dShow" @click="deleteClick">移除</span>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/context/checkButton/CheckButton'
  import { mapGetters } from 'vuex'

  export default {
    name: "CartListItem",
    components:{
      CheckButton
    },
    data(){
      return{
        dShow: true
      }
    },
    props:{
      cartItem:{
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
      ...mapGetters(['cartList'])
    },
    methods:{
      checkClick(){
        this.cartItem.checked = !this.cartItem.checked;
      },
      deleteClick(index){
        console.log('我被点击了'+this.cartList);
        this.cartList.splice(index, 1);
      }
    }
  }
</script>

<style scoped>
  .shop-item{
    width: 100%;
    padding: 10px 10px;
    display: flex;
    border-bottom: 2px solid #ccc;
  }
  .item-img{
    padding: 5px;
  }
  .item-img img{
    width: 80px;
    height: 100px;
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
    top: 10px;
  }
  .item-price{
    color: orangered;
  }
  .item-count{

  }
  .item-selector{
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .item-selector check-button{
    width: 100%;
    height: 100%;

  }
  .item-delete{
    border: 1px solid red;
    border-radius: 10%;
    position: relative;
    top: 10px;
    left: 140px;
    background-color: #ff5777;
    color: white;

  }
</style>
