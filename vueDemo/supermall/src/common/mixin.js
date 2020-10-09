import {debounce} from "./utils";

export const  itemListenerMixin = {
  data(){
    return {
      newrefresh: null
    }
  },
  mounted(){
    // //防抖动处理
    this.newrefresh = debounce(this.$refs.scroll.refresh,100);
    this.itemImageList = () => { this.newrefresh();}
    this.$bus.$on('itemImageLoad',
      // () => {
      // this.$refs.scroll.refresh();
      // newrefresh();}
      this.itemImageList)
    console.log('我是混入中的内容');
  }
}

import BackTop from  'components/context/backTop/BackTop'

export const backTopMixin ={
   components:{
     BackTop
   },
   data(){
     return{
       isShowValue: false
     }
   },
   methods:{
     backClick(){
       console.log('详情页滚动到顶部');
       this.$refs.scroll.scrollTo(0,0);
     }

   }
}

