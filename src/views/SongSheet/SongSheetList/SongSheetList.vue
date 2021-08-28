<template>
  <div class="aa">
    <div class="top">
      <div class="bg">
        <img :src="sheetContainer.playlist.coverImgUrl" alt="">
      </div>
      <!-- 封面图 -->
      <div class="header">
        <img :src="sheetContainer.playlist.coverImgUrl" alt="">
      </div>
      <div class="info">
        <!-- 标题 -->
        <div class="title">
          <span>{{sheetContainer.playlist.name}}</span>
        </div>
        <!-- 作者信息 -->
        <div class="author">
          <!-- 头像 -->
          <div class="autHeader">
            <img :src="sheetContainer.playlist.creator.avatarUrl" alt="">
          </div>
          <!-- 名字 -->
          <div class="name">{{sheetContainer.playlist.creator.nickname}}</div>
          <!-- 简介 -->
          <div class="show">
            <span class="jianjie">简介:</span>
            {{sheetContainer.playlist.description}}
          </div>
        </div>
      </div>

      <div class="iconlist">
        <span class="iconfont icon-bofang2">播放</span>
        <span class="iconfont icon-aixin">添加</span>
        <span class="iconfont icon-pinglun">收藏</span>
        <span class="iconfont icon-fenxiang">分享</span>
        <span class="iconfont icon-xiazai1">下载</span>
        <span class="iconfont icon-wcliaotian">留言</span>
      </div>
    </div>

      <!-- 列表 -->
    <div class="musicList" >
      <div class="nav">
        <span class="index">序号</span>
        <span class='musicName'>歌曲名称</span>
        <span class="time">时长</span>
        <span class='author'>歌手</span>
      </div>
      <div class="list" @click="getID(i,item.id)" v-for="(item,i) in sheetContainer.playlist.tracks" :key="i">
        <span class="index2">{{i+1}}</span>
        <span class="musicName2">{{item.name}}</span>
        <span class="time2">{{SecondToDate(item.dt)}}</span>
        <span class="author2">{{item.al.name}}</span>
      </div>
    </div>
  </div>

 
</template>

<script>
  /*
设置歌单详情列表路由
*/
  import {mapState} from 'vuex'
  import {getSheetContainer} from '../../../api'
  import playController from '../../../components/palyController/playController.vue'
  export default {
    name: 'SongSheetList',
    data() {
      return {
        id: 0
      }
    },
    components:{
      playController
    },
    computed: {
      ...mapState(['sheetContainer'])
      
    },
    mounted: async function () {
      const id = this.$route.query.id
      // console.log('aaaa',id);
      let result = await getSheetContainer(id)
      console.log('getSheetContainer', result.playlist);
      console.log('sheetContainer.playlist.tracks',result.playlist.tracks[0]);
      this.$store.commit('REQSHHEETCONTAINER', result)
    },
    methods: {
    // 毫秒转时间
      SecondToDate: function(msd) {
      var time =parseInt(msd/(1000*60)%60) +':' + parseInt(msd/1000)%60
        // msd = parseInt(time/(1000*60)%60) 
        // msd = parseInt(time/1000)%60
        
      return time ;
      },
      getID(i,id){
        this.$store.commit('REQMUSICID',i)
        this.$store.commit('REQSONGID',id)
        console.log('reqmusicid',i,id);
      }

    },
  }
</script>

<style lang="less" scoped>
  .aa{
    position: relative;
    top: 0;
    left: 0;
    .top {
    width: 100%;
    height: 100px;

    .bg {
      width: 100%;
      height: 400%;
      overflow: hidden;
      filter: blur(8px);
      opacity: .3;

      img {
        width: 100%;
        transform: scale(2, 2);

      }
    }

    .header {
      position: absolute;
      top: 60%;
      left: 8%;

      img {
        width: 300px;
        height: 300px;
        border-radius: 10px;
      }
    }

    .info {
      .title {
        font-size: 25px;
        font-weight: 600;
        position: absolute;
        top: 70px;
        left: 500px;
      }

      .author {
        .autHeader {
          img {
            width: 40px;
            height: 40px;
            position: absolute;
            left: 500px;
            top: 130px;
            border-radius: 50%;
          }
        }

        .name {
          font-size: 18px;
          color: rgb(153, 150, 150);
          position: absolute;
          left: 560px;
          top: 140px;
        }

        .show {
          position: absolute;
          left: 500px;
          top: 200px;
          width: 800px;
          height: 97px;
          color: #666666;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          overflow: hidden;

          .jianjie {
            font-size: 16px;
            color: #000;
          }
        }
      }

    }

    .iconlist {
      position: absolute;
      top: 330px;
      left: 500px;
      display: flex;
      justify-content: space-around;

      span {
        height: 25px;
        line-height: 25px;
        margin-right: 30px;
        padding: 5px 8px;
        font-size: 14px;
        background: rgb(255, 255, 255);
        border-radius: 4px;
      }
    }
    }
    .musicList{
      width: 1200px;
      position: absolute;
      margin-left: -600px;
      left: 50%;
      top:420px;
      border-top: 1px solid #ccc;
      .nav{
        display: flex;
        justify-content: space-between;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #ccc;
        color: rgb(128, 125, 125);
        padding-left: 20px;
        .musicName{
          position: absolute;
          left: 10%;
        }
        .time{
         position: absolute;
         left: 70%;
        }
        .author{
          position: absolute;
         left: 80%;
        }
      }
      .list{
        display: flex;
        justify-content: space-between;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #ccc;
        color: #000;
        padding-left: 20px;
        .musicName2{
         position: absolute;
          left: 10%;
          
        }
        .time2{
          position: absolute;
          left: 70%;
        }
        .author2{
          position: absolute;
         left: 80%;
        }
        &:hover{
          background:#DFE4EA;
        }
      }
    }
  }
</style>