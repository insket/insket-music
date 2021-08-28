<template>
  <div class="container">
    <div class="list" v-for="(item, index) in musicTag.playlists" :key="index">
       <div class="pic" @click='goSheet(item.id)'>
         <!-- 展示图 -->
          <img class="view" :src="item.coverImgUrl" >
          <!-- 头像 -->
          <img class="header" :src="item.creator.avatarUrl" >
          <!-- nickname -->
          <div class="author">{{item.creator.nickname}}</div>
          <!-- 播放数量 -->
          <div class="playCount">
            <span class="count">{{changeValue(item.playCount)}}</span>
            <span class="iconfont icon-el-icon-sort-up"></span>
          </div>
       </div>
       <!-- 标题 -->
        <div class="title">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
/*
这是主页Container的音乐歌单列表
*/
import {mapState} from 'vuex'
export default {
  name:'ContainerView',
  data() {
    return {
      sheetId:0
    }
  },
  updated(){
    
  },
  methods: {
    changeValue:function(num){
      let res = 0
      if(num>=100000000){
            res = num/100000000
            res = res.toFixed(2) + '亿'
            
      }else if(num>10000){
          res = num/10000
          res = res.toFixed(2) + '万'
      }
      return res
    },
    goSheet(id){
      this.$router.push({path:'/songsheet/songsheetlist',query:{id}})
      console.log(id);
    }
  },
  computed:{
    ...mapState(['musicTag'])
  },
}
</script>

<style lang="less" scoped>
  .container{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    .list{
      width: 125px;
      height: 170px;
      box-sizing: border-box;
      margin: 2px 8px 2px 8px;
      border-radius: 8px;
      .pic{
        position: relative;
        width: 125px;
        height: 125px;
        overflow: hidden;
        border-radius: 8px;
        .view{
         width: 100%;
         height: 100%;
         box-sizing: border-box;
         z-index: -9;
         transition: all .3s linear;
        }
        .author{
          position: absolute;
          top: 80%;
          left: 33%;
          font-weight: 550;
          font-size: 13px;
          color: rgb(233, 233, 233);
          width: 80px;
          height: 14px;
          line-height: 14px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .header{
          position: absolute;
          width: 30px;
          border-radius: 50%;
          top: 72%;
          left: 7%;
          z-index: 1;
        }
        .playCount{
          position: absolute;
          height: 23px;
          line-height: 23px;
          background:rgba(0, 0, 0,.4);
          right: 3%;
          top: 3%;
          border-bottom-left-radius: 4px;
          float:right;
          color: #fff;  
            .count{
              font-size: 12px;
              padding-left: 4px;
              line-height: 13px;
            }
            .iconfont{
              font-size: 12px;
              margin: 0 9px 0 5px;
              right: 10%;
              transition: all .4s linear;
               display: inline-block;
            }
          }
        }

        &:hover{
          .view{
             transform: scale(1.1,1.1);
             transition: all .3s linear ;
             cursor: pointer;
          }
          .playCount{
            color: #2AAA61;
             .iconfont{
             
              transform: rotate(90deg);
              transition: all .3s linear ;
            }
          }
      }
      .title{
        margin-top: 10px;
        font-size: 14px;
        width: 125px;
        height: 28px;
        font-weight: 600;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
    
  }
</style>