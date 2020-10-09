<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"
                    @titleClick="titleClick"
                    ref="detailnav"></detail-nav-bar>

    <scroll class="content" ref="scroll"
            @scPosition="contentScroll" :probetype="3">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo"
                         @detailImagLoad="detailImagLoad"></detail-goods-info>
      <detail-param-info :param-info="paramInfo"
                          ref="param"></detail-param-info>
      <detail-common-info :common-info="commentInfo"
                          ref="common"></detail-common-info>
      <goods-list :goods="recommendList"
                          ref="goods"></goods-list>

    </scroll>
    <detail-bottom-bar @addToCart="addToCart" @collect="collect"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowValue"></back-top>
  <!--<p>{{iid}}</p>-->

  </div>
</template>

<script>
  import DetailNavBar from  './childComps/DetailNavBar'
  import DetailSwiper from  './childComps/DetailSwiper'
  import DetailBaseInfo from  './childComps/DetailBaseInfo'
  import DetailShopInfo from  './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from  './childComps/DetailParamInfo'
  import DetailCommonInfo from  './childComps/DetailCommonInfo'
  import DetailBottomBar from  './childComps/DetailBottomBar'

  import Scroll from  'components/common/scroll/Scroll'
  import GoodsList from  'components/context/goods/GoodsList'
  // import BackTop from  'components/context/backTop/BackTop'

  import {getDetail, Goods, Shop, GoodsParam, getRecommend} from  'network/detail';
  import {debounce} from "common/utils";
  import {itemListenerMixin , backTopMixin} from "common/mixin";



  export default {
    name: "Detail",
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommonInfo,
      GoodsList,
      DetailBottomBar
      // Toast
      // BackTop

    },
    mixins: [itemListenerMixin , backTopMixin],
    data(){
      return{
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommendList: [],
        itemImageList: null,
        themeTopY: [],
        getThemeTopY: null,
        currentIndex: 0,
        isShowValue: false
      }
    },
    created() {
      console.log('详情页取id'+this.$route.params.iid);
      this.iid = this.$route.params.iid;

      getDetail(this.iid).then(res => {
        console.log(res);
        const data = res.result;
        //1.顶部轮播
        this.topImages = data.itemInfo.topImages;
        //2.获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
        //3.创建店铺信息
        this.shop = new Shop(data.shopInfo);
        //4.保存商品详情数据
        this.detailInfo = data.detailInfo;
        //5.获取参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule);
        //6.取出评论信息  可能没有
        if(data.rate.cRate !== 0){
          this.commentInfo = data.rate.list[0];
        }
      })

      //请求推荐数据
      getRecommend().then(res => {
        console.log(res);
        this.recommendList = res.data.list;
      })

      //进行防抖处理
      this.getThemeTopY = debounce(() => {
        this.themeTopY = [];
        this.themeTopY.push(0);
        this.themeTopY.push(this.$refs.param.$el.offsetTop);
        this.themeTopY.push(this.$refs.common.$el.offsetTop);
        this.themeTopY.push(this.$refs.goods.$el.offsetTop);
        this.themeTopY.push(Number.MAX_VALUE);
        console.log(this.themeTopY);
      },100)
    },
    mounted() {
      console.log('detailmounted');
      // //防抖动处理
      // const newrefresh = debounce(this.$refs.scroll.refresh,100);
      // this.itemImageList = () => { newrefresh();}
      // this.$bus.$on('itemImageLoad',
      //   // () => {
      //   // this.$refs.scroll.refresh();
      //   // newrefresh();}
      //   this.itemImageList
      // )

    },
    destroyed() {
      this.$bus.$off('itemImageLoad',this.itemImageList);
    },
    methods:{
      detailImagLoad(){
        console.log('我是大图');
        this.$refs.scroll.refresh();
        this.newrefresh;

        this.getThemeTopY();
      },
      titleClick(index){
        console.log('详情页标题：'+index);
        this.$refs.scroll.scrollTo(0,-this.themeTopY[index],100);
      },
      contentScroll(position){
        // console.log(position);
        //1.获取y
        const positionY = -position.y;
        //2.进行对比
        let length = this.themeTopY.length;
        for(let i = 0; i < length-1; i++){
          // console.log('HELLO'+i);
          if(this.currentIndex !== i && (positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1])){
            // console.log(i);
            this.currentIndex = i;
            console.log(this.currentIndex);
            this.$refs.detailnav.currentIndex = this.currentIndex;
          }
        }

        this.isShowValue = (-position.y) > 1000;
      },
      // backClick(){
      //   console.log('详情页滚动到顶部');
      //   this.$refs.scroll.scrollTo(0,0);
      // }

      addToCart(){
        console.log('addToCart已经传过来了');
        //1.获取需要展示的信息
        const  product = { }
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;

        //2.将商品添加到购物车
        // this.$store.commit('addCart',product);
        // this.$store.dispatch('addCart',product);
        if(this.$store.state.code == 1){
          this.$store.dispatch('addCart',product).then(res => {

            this.$toast.show(res,2000);
            console.log(res);
          })
        }else if(this.$store.state.code == 0 || this.$store.state.code == ''){
          this.$toast.show('请先登录',2000);
        }


      },
      collect(){
        console.log('收藏已经传入');
        const collectstore = { }
        collectstore.image = this.topImages[0];
        collectstore.title = this.goods.title;
        collectstore.desc = this.goods.desc;
        collectstore.price = this.goods.realPrice;
        collectstore.iid = this.iid;

        if(this.$store.state.code == 1) {
          this.$store.dispatch('addCollect', collectstore).then(res => {
            this.$toast.show(res, 2000);
            console.log(res);
          })
        }else if(this.$store.state.code == 0 || this.$store.state.code == ''){
          this.$toast.show('请先登录',2000);
        }
      }
    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9;
    background-color: white;
    height: 100vh;
  }

  .detail-nav{
    /*position: relative;*/

  }

  .content{
    /*height: calc(100% - 44px);*/
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
