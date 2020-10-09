import Vue from 'vue'
import VueRouter from 'vue-router'

//导入bootstrap和jquery
// import $ from 'jquery'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';





const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const Cart = () => import('@/views/cart/Cart')
const Profile = () => import('@/views/profile/Profile')
const Detail = () => import('@/views/detail/Detail')

const Login = () => import('@/views/login/Login')
const Register = () => import('@/views/login/Register')
const Collect = () => import('@/views/profilecollect/Collect')
const Changepsd = () => import('@/views/profilepsd/Changepsd')



//1.安装插件
Vue.use(VueRouter);


//2.创建router
const routes = [

  {
    path: '',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    component:Detail
  },
  {
    path:'/login/:login',
    component:Login
  },
  {
    path:'/register/:register',
    component:Register
  },
  {
    path:'/collect/:collect',
    component:Collect
  },
  {
    path:'/password/:change',
    component:Changepsd
  }


];
const router = new VueRouter({
  routes,
  mode: 'history'
})

export  default  router
