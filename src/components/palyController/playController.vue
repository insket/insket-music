<template>
  <div class="container">
    <div class="musicInfo">
      <!-- 音乐头像 -->
      <div class="header">
        <img class="picUrl" :src="sheetContainer.playlist.tracks[musicId].al.picUrl" >
      </div>
      <div class="info">
        <div class="title">{{sheetContainer.playlist.tracks[musicId].name}}</div>
        <div class="author">{{sheetContainer.playlist.tracks[musicId].ar[0].name}}</div>
      </div>
      <div class="iconlist">
        
        <span @click="goPlay(-1)" class="iconfont icon-shangyige"></span>
        <!-- 播放/停止 -->
        <span @click="start" v-show="paused" class="iconfont icon-bofang "></span>
        <span @click="start" v-show="!paused" class="iconfont icon-zantingtingzhi"></span>
        <!-- 下一首 -->
        <span @click="goPlay(1)" class="iconfont icon-chevron-right"></span>
      </div>
    </div>
      <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${songId}.mp3`"></audio>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name:'playController',
  data() {
    return {
      // id:this.$store.state.musicId
      paused:true    //点击切换iconfont状态  true 为暂停
    }
  },
  updated(){
    console.log(this.$refs.audio);
  },
  computed:{
    ...mapState(['sheetContainer','musicId','songId'])
  },
  methods: {
    //判断歌曲是否在播放
    start(){
      if (this.$refs.audio.paused) {
        this.$refs.audio.play()
        this.paused = false
      }else{
        this.$refs.audio.pause()
        this.paused = true
      }
    },
    goPlay(num){
      if (this.$store.state.musicId === 0) {
        alert('再往前已经没有歌了')
        return
      }
      this.$store.state.musicId += num
    }
  }
}
</script>

<style lang="less" scoped>
  .container{
    margin-top: 30px;
    position: relative;
    position: fixed;
    bottom: -50px;
    left: 0;
    width: 100%;
    height: 60px;
    background: #747D8C;
    z-index: 10;
    transition-delay: 3s ;
    .musicInfo{
      position: absolute;
      left: 10%;
      // background: skyblue;
      width: 600px;
      height: 60px;
      // background: skyblue;
      .header{
        .picUrl{
          width: 50px;
          height: 50px;
          padding: 5px;
        }
      }
      .info{
        position: absolute;
        top: 25%;
        left: 20%;
        .title{
          font-size: 18px;
          color: #fff;
        }
        .author{
          margin-top: 4px;
          font-size: 14px;
          color: #ccc;
        }
      }
      .iconlist{
        position: absolute;
        top: 35%;
        left: 75%;
        .iconfont{
          font-size: 20px;
          margin-left: 10px;
          color: #fff;
        }
      }
    }
    &:hover{
      bottom: 0px;
      transition: all .3s linear;
    }
    
  }
</style>