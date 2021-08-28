<template>
  <div id="app">
     <TopList v-if="$route.meta.isShowTop"></TopList>
    <router-view/>
    <playController v-if="$route.meta.iscontroller"></playController>
  </div>
</template>

<script>
import TopList from './components/TopList/TopList'
import playController from './components/palyController/playController.vue'
export default {
  name:'App',
  components: {
   TopList,
   playController
  }
  
}
</script>

<style lang="less">

</style>
