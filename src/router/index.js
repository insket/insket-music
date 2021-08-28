import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      isShowTop:true
    }
  },
  {
    path: '/rank',
    name: 'Rank',
    component: () => import( '../views/Rank/Rank.vue'),
    meta:{
      isShowTop:true
    }
  },
  {
    path: '/songsheet',
    name: 'SongSheet',
    component: () => import( '../views/SongSheet/SongSheet.vue'),
    meta:{
      isShowTop:true
    },
      children:[
        {
          path:'/songsheet/songsheetlist',
          name:'songsheetlist',
          component: () => import( '../views/SongSheet/SongSheetList/SongSheetList.vue'),
          meta:{
            isShowTop:true,
            iscontroller:true
          }
        }
      ]
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import( '../views/Video/Video.vue'),
    meta:{
      isShowTop:true,
      iscontroller:true
    }
  },
  {
    path: '/mymusic',
    name: 'MyMusic',
    component: () => import( '../views/MyMusic/MyMusic.vue'),
    meta:{
      isShowTop:true,
      iscontroller:true
    }
  },
  {
    path: '/singer',
    name: 'Singer',
    component: () => import( '../views/Singer/Singer.vue'),
    meta:{
      isShowTop:true,
      iscontroller:true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/Login/Login.vue'),
    meta:{
      isShowTop:false,
      iscontroller:false
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
