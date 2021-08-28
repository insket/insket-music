<template>
   <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,i) in banners" :key="i">
        <img :src="item.pic">
      </div>
      
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
//这是轮播图组件
import Swiper from 'swiper'; 
import 'swiper/swiper-bundle.css'
import {getBanner} from '../../api'
export default {
  name:'Banner',
  data() {
    return {
      banners:[]  //轮播图数据
    }
  },
   mounted :async function() {
    let result = await getBanner(1)
    console.log('Banner result',result);
    this.banners = result.banners
  },
  updated() {
     var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  },
}
</script>

<style>
    .swiper-container {
      width: 1200px;
      height: 145px;
      padding: 20px 10px;
    }

    .swiper-slide img{
     width: 100%;
     border-radius: 10px;
     cursor: pointer;
    }
</style>