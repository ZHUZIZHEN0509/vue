<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageload">
        </a>
      </swiper-item>

    </swiper>
  </div>

</template>

<script>
  import {Swiper , SwiperItem} from 'components/common/swiper'


  export default {
    name: "HomeSwiper",
    props:{
      banners:{
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        isLoad: false
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    methods:{
      //监听轮播图是否加载完成
      imageload(){
        if(!this.isLoad){
          console.log('!!!!!!!!!!!______!!!!!!!');
          this.$emit('swiperImageLoad');
          this.isLoad = true;
        }

      }
    }
  }
</script>

<style scoped>

</style>
