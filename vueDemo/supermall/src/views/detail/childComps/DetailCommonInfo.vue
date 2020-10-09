<template>
  <div v-if="Object.keys(commonInfo).length !== 0" class="common-info">
    <div class="common-hearder">
      <div><span>用户评价</span></div>
      <div><span>更多</span></div>
    </div>
    <div class="common-center">
      <img :src="commonInfo.user.avatar" alt="">
      <span>{{commonInfo.user.uname}}</span>
    </div>
    <div class="common-end">
      <p>{{commonInfo.content}}</p>
      <div class="info-date">
        <span>{{commonInfo.created | showDate}}</span>
        <span>{{commonInfo.style}}</span>
      </div>
      <div class="info-img">
        <img v-for="(item , index) in commonInfo.images" :key="index"
        :src="item">
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "common/utils";

  export default {
    name: "DetailCommonInfo",
    props:{
      commonInfo:{
        type: Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      showDate(value){
        //1.将时间戳转成Date对象
        const  date = new Date(value * 1000);
        //2.将date进行格式化   return函数返回值
        return formatDate(date, 'yyyy-MM-dd hh:mm')
      }
    }
  }
</script>

<style scoped>
  .common-info{
    border-bottom: 5px solid #f2f5f8;
  }
  .common-hearder{
     display: flex;
    justify-content: space-between;
    padding: 15px 15px;
    border-top: 5px solid crimson;
    border-bottom: 2px solid #f2f5f8;
  }
  .common-center{
    padding: 10px 15px;
  }
  .common-center img{
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
  .common-center span{
    position: relative;
    top: 3px;
    left: 7px;
    font-size: 15px;
  }
  .common-end{
    padding: 10px 15px;
  }
  .info-date{
    font-size: 14px;
    color: #999;
  }
  .info-date span{
    margin-left: 5px;
  }
  .info-img{
    margin-top: 10px;
  }
  .info-img img{
    width: 70px;
    height: 70px;
    margin-right: 5px;

  }
</style>
