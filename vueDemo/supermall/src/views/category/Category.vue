<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @menuClick="menuClick"></tab-menu>

        <scroll id="wrapper">
          <tab-content :subcategories="showSubcategory"></tab-content>
        </scroll>

    </div>
  </div>
</template>

<script>
   import NavBar from 'components/common/navbar/NavBar'
   import Scroll from  'components/common/scroll/Scroll'

   import {getCategory , getSubcategory} from 'network/category'

   import TabMenu from './childComps/TabMenu'
   import TabContent from './childComps/TabContent'

  export default {
		name: "Category",
    components: {
		  NavBar,
      TabMenu,
      TabContent,
      Scroll
    },
    data(){
		  return{
		    categories: [],
        categoryData: {},
        currentIndex: -1
      }
    },
    created(){
      this.getCategory();
    },
    methods:{
      getCategory(){
        getCategory().then( res => {
          console.log(res);
          this.categories = res.data.category.list;
          for(let i = 0; i <  this.categories.length; i++){
            this.categoryData[i] = {
              subcategories:{}
            }
          }
          this.getSubcategory(0);
        })
      },
      getSubcategory(index){
        this.currentIndex = index;
        const maitKey = this.categories[index].maitKey;
        getSubcategory(maitKey).then( res => {
           console.log(res);
           this.categoryData[index].subcategories = res.data;
           this.categoryData = {...this.categoryData};
        })
      },
      menuClick(index){
        this.getSubcategory(index);

      }
    },
    computed:{
		  showSubcategory(){
		    if (this.currentIndex === -1) return {}
		    return this.categoryData[this.currentIndex].subcategories;
      }
    }
	}
</script>

<style scoped>
  #category{
    height: 100vh;
  }
  .content{
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
    display: flex;
  }
  .nav-bar{
    background-color: #ff8198;
    color: white;
  }
  #wrapper{
    height: 100%;
    flex: 1;
  }
</style>
