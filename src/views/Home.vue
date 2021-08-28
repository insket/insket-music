<template>
  <div>
   <Banner></Banner>
   <ContainerList></ContainerList>
   <FooterMusic></FooterMusic>
  </div>
</template>

<script>
import Banner from '../components/Banner/Banner.vue'
import ContainerList from '../components/ContainerList/ContainerList.vue'
import FooterMusic from '../components/FooterMusic/FooterMusic.vue'
export default {
  name: 'Home',
  components:{
    Banner,ContainerList,FooterMusic
  }
}
</script>
