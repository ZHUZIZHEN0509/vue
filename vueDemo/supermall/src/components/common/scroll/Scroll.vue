<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props:{
      probetype:{
        type: Number,
        default: 0
      },
      pullupload:{
        type: Boolean,
        default: false
      }
    },
    data(){
      return{
       scroll: null
      }
    },
    mounted() {
      //1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        probeType: this.probetype,
        pullUpLoad: this.pullupload
      })
      //2.监听滚动位置
      if (this.probetype === 2 || this.probetype ===3) {
        this.scroll.on('scroll', (position) => {
          // console.log(position);
          this.$emit('scPosition',position);
        })
      }
      // this.scroll.scrollTo(0,0)
      //4.监听上拉事件
      if(this.pullupload){
        this.scroll.on('pullingUp', () => {
          // console.log('上拉加载更多');
          this.$emit('pullingUp');
        })
      }


      //解决滚动bug
      // console.log(this.scroll);
      // this.scroll.refresh()
    },
    methods:{
      //3.滚动到顶部
      scrollTo(x,y,time = 300){
        this.scroll.scrollTo(x,y,time);
      },
      finishPullUp(){
        this.scroll && this.scroll.scrollTo && this.scroll.finishPullUp();//进行下一次下拉加载更多
      },
      //---1.-3
      refresh(){
        console.log('sssssssss');
        this.scroll && this.scroll.scrollTo && this.scroll.refresh();
      },

      getScrollY(){
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style scoped>

</style>
