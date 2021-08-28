<template>
  <div>
    <HotSong></HotSong>
    <ContainerView></ContainerView>
  </div>
</template>

<script>
/*
这是主页Container
*/
import HotSong from './HotSong/HotSong.vue'
import ContainerView from './ContainerView/ContainerView.vue'
export default {
  nema:'ContainerList',
  components:{
    HotSong,ContainerView
  }
}
</script>

<style>

</style>