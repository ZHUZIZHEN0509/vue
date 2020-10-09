<template>
  <!--:src="goodsItem.show.img"

  -->
   <div class="goodsItem" @click="itemclick">
     <img :src="showImage" alt="" @load="imageLoad">
     <div class="divpspan">
       <p>{{goodsItem.title}}</p>
       <span class="price">{{goodsItem.price}}</span>
       <span class="collect">{{goodsItem.cfav}}</span>
     </div>
   </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props:{
      goodsItem:{
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      //检测图片是否加载完成
      imageLoad(){
        // console.log('imageLoad');
        //---1.使用事件总线解决滚动bug
        this.$bus.$emit('itemImageLoad')
      },
      //跳转到详情页
      itemclick(){
        console.log('跳转到详情页');
        this.$router.push('/detail/' + this.goodsItem.iid);
        // this.$router.push('detail' + this.goodsItem);

      }
    },

    computed:{
      showImage(){//前面为空执行后面
        return this.goodsItem.image || this.goodsItem.show.img;
      }
    }

  }
</script>

<style scoped>
  .goodsItem{
    width: 48%;
    padding-bottom: 40px;
    position: relative;
  }
  .goodsItem img{
    border-radius: 8px;
    width: 100%;
  }
  .divpspan{
    font-size: 14px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
    white-space: nowrap;

  }
  div p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: -4px;
  }
  .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .collect{
    position: relative;
  }
  .divpspan .collect::before{
    content: '';
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    position: absolute;
    left: -15px;
    top: 2px;
    width: 14px;
    height: 14px;
  }
</style>
