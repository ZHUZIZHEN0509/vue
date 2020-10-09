<template>
  <div id="home">
    <nav-bar class="home-nav-color">
      <div slot="center">嗨购</div>
    </nav-bar>

    <tab-control :titles="titles" @tabClick="tabClick"
                 ref="tabcontrol2"
                 class="tab-control" v-show="isTabFixed"></tab-control>

<scroll class="content" ref="scroll"
        :probetype="3"
        @scPosition="scPosition"
        :pullupload="true"
        @pullingUp="loadMore"
>
  <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
  <recomend-view :recommends="recommends"></recomend-view>
  <home-fashion></home-fashion>
  <tab-control :titles="titles" @tabClick="tabClick"
               ref="tabcontrol"></tab-control>
  <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowValue"></back-top>


    </div>

    </template>

    <script>
  //公共组件
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/context/tabControl/TabControl'
  import Scroll from  'components/common/scroll/Scroll'
  // import BackTop from 'components/context/backTop/BackTop'

  //子组件
  import HomeSwiper from './childComps/HomeSwiper'
  import RecomendView from './childComps/HomeRecommendView'
  import HomeFashion from  './childComps/HomeFashion'
  import GoodsList from  'components/context/goods/GoodsList'


  //方法
  //导入请求  没ault  组件创建好就发送created
  import { getHomeMultidata , getHomeGoods } from "network/home";
  import {debounce} from "common/utils";
  import {itemListenerMixin , backTopMixin} from "common/mixin";

  // //1.导入轮播
  // import {Swiper , SwiperItem} from 'components/common/swiper'


  export default {
    name: "Home",
    components:{
      NavBar,
      // //1.1注册轮播
      // Swiper,
      // SwiperItem
      HomeSwiper,
      RecomendView,
      HomeFashion,
      TabControl,
      GoodsList,
      Scroll
      // ,
      // BackTop
    },
    mixins: [itemListenerMixin , backTopMixin],
    data(){//保存请求数据
      return{
        // result: null
        //单独存
        banners:[],
        recommends:[],
        titles: ['流行','新款','精选'],
        goods:{
          'pop':{page: 0, list: []},
          'new':{page: 0, list: []},
          'sell':{page: 0, list: []}
        },
        currentType: 'pop',
        // isShowValue: false,
        tabOffsetTop: 0,
        isTabFixed: false,//默认情况不吸顶
        saveY: 0,
        itemImageList: null
      }
    },
    created() {
      //1.请求多个数据  .then请求是promise
      //   getHomeMultidata().then(res=>{
      //   // console.log(res);
      //   // this.result = res;//数据传入result
      //   // this.banners = res.data.banner.list;//单独传  只拿list
      //   // this.recommends = res.data.recommend.list;
      // }),
      //封装
        this.getHomeMultidata()
        //2.请求商品
        // getHomeGoods('pop',1).then(res=>{
        //   console.log(res);
        // })
        this.getHomeGoods('pop');
        this.getHomeGoods('new');
        this.getHomeGoods('sell');


    },
    mounted(){
      // //防抖动  传入refresh函数传入
      // // const  refresh = this.debounce(this.$refs.scroll.refresh,50);
      // const  newrefresh = debounce(this.$refs.scroll.refresh,100);
      // this.itemImageList =() => { newrefresh() }
      //
      // //---1.-1解决滚动bug
      // this.$bus.$on('itemImageLoad',
      //   // () => {
      //   // console.log('=======++++++++=========');
      //   // this.$refs.scroll.refresh();
      //   // newrefresh()}
      //   this.itemImageList
      // )



      // console.log(this.$refs.tabControl.offsetTop);拿不到
      //所有组件都有一个属性$el : 用于获取组件中的元素
      // console.log(this.$refs.tabcontrol.$el.offsetTop);

    },
    activated(){
      this.$refs.scroll.scrollTo(0,this.saveY,0);
      this.$refs.scroll.refresh();
    },
    deactivated(){
      this.$bus.$off('itemImageLoad',this.itemImageList);

      this.saveY = this.$refs.scroll.getScrollY;
    },
    methods:{
      //网络请求
      getHomeMultidata(){//1.请求多个数据
        getHomeMultidata().then( res => {
          this.banners = res.data.banner.list;//单独传  只拿list
          this.recommends = res.data.recommend.list;
          console.log("轮播数据：");
        })
      },
      getHomeGoods(type){
        //page动态方法
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res=>{
          console.log(res);//"商品数据："
          this.goods[type].list.push(...res.data.list);
          //取出数据页码+1
          this.goods[type].page += 1;

          //进行下一次下拉加载更多
          // this.$refs.scroll.scroll.finishPullUp();
          this.$refs.scroll.finishPullUp();
        })
      },
      //事件监听
      tabClick(index){
        console.log("我是index在子导航-----"+index);
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }

        // //为tabcontrol子导航设置值
        this.$refs.tabcontrol2.currentIndex = index;
        this.$refs.tabcontrol.currentIndex = index;
      },

      // backClick(){
      //   console.log('滚动到顶部');
      //   //添加ref拿到scroll, 就能访问scroll及内部的一些方法
      //   // this.$refs.scroll.scroll.scrollTo(0,0,500);
      //   this.$refs.scroll.scrollTo(0,0);
      // },

      scPosition(position){
        // console.log(position);
        this.isShowValue = (-position.y) > 1000;

        //是否吸顶  传入isTabFixed
        this.isTabFixed = (-position.y) > this.tabOffsetTop;
      }
      ,
      loadMore(){
        // console.log('上拉加载更多');
        this.getHomeGoods(this.currentType);
      }

      //进行封装防抖函数
      // debounce(func,delaytime){
      //   let timer = null;
      //   return function (...args) {
      //     //如果有值进行清除
      //     if(timer) clearTimeout(timer);
      //
      //     timer = setTimeout(() => {
      //       func.apply(this,args)
      //     },delaytime)
      //   }
      // }
      ,
      swiperImageLoad(){
        // console.log(this.$refs.tabcontrol.$el.offsetTop);
        this.tabOffsetTop = this.$refs.tabcontrol.$el.offsetTop;
      }
    }
  }
</script>

<style scoped>
  #home{
    position: relative;
    /*padding-top: 44px;*/
    height: 100vh;
  }
  .home-nav-color{
    /*display: flex;*/
    background-color: var(--color-tint);
    color: white;
    /*原生滚动使用*/
    /*position: fixed;*/
    /*top: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    /*z-index: 1;*/
  }

  /*滚动固定子导航*/
  /*.tab-control{*/
    /*!*position: sticky;*!*/
    /*top: 44px;*/
    /*background-color: #ffffff;*/
    /*z-index: 9;*/
    /*!*border: 1px solid red;*!*/
  /*}*/

  .content{
    /*height: 300px;*/
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .tab-control{
    background-color: white;
    position: relative;
    z-index: 9;
  }


</style>
