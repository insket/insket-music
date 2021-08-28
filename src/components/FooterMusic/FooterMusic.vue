<template>
  <div class="Container">
    <div class="title">新歌速递</div>
    <div class="list" @click="clickPlay(item.id)" v-for="(item,i) in newMusic.data" :key="i" v-if="i<=9">

      <div class="newMusicInfo">
        <!-- 播放 -->
        <div class="start">
          <span class="iconfont icon-bofang"></span>
        </div>
        <!-- 歌曲封面 -->
        <div class="header">
          <img :src="item.album.picUrl">
          
        </div>
        <!-- 歌曲信息 -->
        <div class="info">
          <div class="name">{{item.album.name}}</div>
          <div class="author">{{item.artists[0].name}}</div>
        </div>
            <!-- 时间 -->
          <div class="time">
            {{SecondToDate(item.bMusic.playTime)}}
          </div>
        </div>
        
      </div>
    </div>
    
  </div>
</template>

<script>
import { mapState } from 'vuex'
import {getNewMusic} from '../../api'
/*
这是新歌速递
*/
export default {
  name:'FooterMusic',
  mounted:async function() {
      let result = await getNewMusic()
      console.log('getNewMusic',result);
      this.$store.commit('REQNEWMUSIC',result)
  },
  computed:{
    ...mapState(['newMusic'])
  },
  methods: {
    // 毫秒转时间
    SecondToDate: function(msd) {
    var time =parseInt(msd/(1000*60)%60) +':' + parseInt(msd/1000)%60
      // msd = parseInt(time/(1000*60)%60) 
      // msd = parseInt(time/1000)%60
      
    return time ;
    },
    clickPlay(id){
        console.log('newMusic',id);
        this.$store.commit('REQSONGID',id)
    }
  },
}
</script>

<style lang="less" scoped>
  .Container{
    padding-top: 60px;
    width: 1200px;
    margin: 0 auto;
  
    .title{
      font-size: 18px;
      font-weight: 600;
    }
    .list{
      float: left;
      margin: 0 50px 0 50px;
      
      .newMusicInfo{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 500px;
        height: 60px;
        margin-top: 20px;
        border: 1px solid transparent;
        background: #747D8C;
        border-radius: 10px;
        box-sizing: border-box;
        position: relative;
        .iconfont{
          font-size: 30px;
          position: absolute;
          top: 15px;
          left: 10px;
          color: #FFFFFF;
          
        }
        .header{
          width: 40px;
          position: absolute;
          top: 10px;
          left: 80px;
          img{
            width: 100%;
            border-radius: 4px;
          }
        }
        .info{
          position: absolute;
          left: 130px;
          .name{
              color: #fff;
              font-size: 15px;
              width: 270px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
          }
          .author{
              margin-top: 8px;
              color: #fff;
              font-size: 13px;
          }
        }
        .time{
          position: absolute;
          right: 20px;
          font-weight: 600;
          color: #fff;
        }
      }
    }
    
  }
</style>