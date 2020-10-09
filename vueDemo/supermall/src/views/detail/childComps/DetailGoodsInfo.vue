<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-header">
      <div>{{detailInfo.desc}}</div>
      <div>{{detailInfo.detailImage[0].key}}</div>
    </div>
    <div>
      <img v-for="(item , index) in detailInfo.detailImage[0].list" :src="item" :key="index" alt=""
       @load="detailImageLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoosInfo",
    data(){
      return {
        counter: 0,
        imgLenth: 0
      }
    },
    props:{
      detailInfo:{
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      detailImageLoad(){
        // this.counter += 1;
        // if (this.counter === this.imgLenth) {
          console.log('detailImagLoad');
          // this.$bus.$emit('detailImageLoad');
        this.$emit('detailImagLoad')
        // }
      }
    }
    // ,
    // watch:{
    //   detailInfo(){
    //     this.imgLenth = this.detailInfo.detailImage[0].list.length;
    //   }
    // }
  }
</script>

<style scoped>
  .goods-info{
    padding: 15px 0;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-header{
    display: flex;
    flex-wrap: wrap;
    padding: 0px 5px;
    text-align: center;
    justify-content: center;
  }
  div img{
    width: 100%;
    padding: 2px 0;
  }

</style>
