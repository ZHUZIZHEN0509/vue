<template>
  <div class="bottom-bar">
    <div class="bottom-check">
      <check-button class="bottom-btn"
                    :is-checked="isSelectAll"
                    @click.native="checkClick"></check-button>
      <span class="bottom-text">全选</span>
    </div>

    <div class="bottom-price">
      合计：{{totalPrice}}
    </div>

    <div class="bottom-computed" @click="computedClick">
      去结算：({{checkLength}})
    </div>

  </div>
</template>

<script>
  import CheckButton from 'components/context/checkButton/CheckButton'

  import { mapGetters } from 'vuex'

  export default {
    name: "CartBottomBar",
    components:{
      CheckButton
    },
    computed:{
      ...mapGetters(['cartList']),
      totalPrice(){
        return '￥'+ this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue += item.price * item.count
        },0).toFixed(2)
      },

      checkLength(){
        return this.cartList.filter(item => item.checked).length;
      },

      isSelectAll(){
        // return !(this.cartList.filter(item => !item.checked).length);
        if (this.cartList.length === 0){
          return false;
        }
        return !this.cartList.find(item => !item.checked);
      }
    },
    methods:{
      checkClick(){
        console.log('全选被点击了');
        if(this.isSelectAll){//全选
          this.cartList.forEach(item => item.checked = false);
        }else {
          this.cartList.forEach(item => item.checked = true);
        }
      },
      computedClick(){
        if(this.isSelectAll === false){
          this.$toast.show('请先添加商品',2000);
        }else {
          this.$toast.show('下单成功',2000);
        }
      }
    }
  }
</script>

<style scoped>
   .bottom-bar{
     height: 40px;
     line-height: 40px;
     display: flex;
     align-items: center;
     font-size: 14px;
   }
  .bottom-check{
    display: flex;
    flex-wrap: nowrap;
    line-height: 20px;
    width: 60px;
    margin-left: 10px;
  }
  .bottom-btn{
    display: flex;
    width: 22px;
    height: 22px;
  }
  .bottom-price{
    flex: 1;
    text-align: center;
  }
  .bottom-computed{
    background: #ff5777;
    width: 90px;
    text-align: center;
  }
</style>
