<template>
  <div class="navList">
    <span>热门歌单</span>
    <div class="classifyList">
      <div class='list' v-for="(item,i) in listItem" :key="i"
        @click="changeActive(item)"
        :class="{active:(isActive||'全部')== item}"
      >
        {{item}}
      </div>
    </div>
  </div>
  
</template>

<script>
/*
这是主页热门歌单分类列表
*/
export default {
  name:'HotSong',
  data() {
    return {
      listItem:[     //分类列表
            '全部','流行','华语','欧美','韩语','日语','电子'
      ],
      isActive:'全部'
    }
  },
  methods: {
    changeActive(item){
      this.isActive = item

    }
  },
  mounted() {
    this.$store.dispatch('reqMusicTag',this.isActive)
  },
  updated(){
    this.$store.dispatch('reqMusicTag',this.isActive)
  }
}
</script>

<style lang="less" scoped>
  .navList{
    width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
    display: flex;
    span{
      font-size: 18px;
      font-weight: 600;
    }
    .classifyList{
      padding-left: 20px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .list{
        margin: 0 15px;
        height: 25px;
        cursor: pointer;
          &.active{
            font-weight: 600;
            vertical-align: middle;
            border-bottom: 2px solid skyblue;
            
          }
      }
    }
  }
</style>