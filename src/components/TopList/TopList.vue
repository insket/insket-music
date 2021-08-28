<template>
  <div class="topContainer">
    <!-- 列表 -->
    <div class="listContainer">
      <ul class="topList">
        <li class="topListItem" @click="goPath('/Home')">发现音乐</li>
        <li class="topListItem" @click="goPath('/Rank')">排行榜</li>
        <li class="topListItem" @click="goPath('/SongSheet')">歌单</li>
        <li class="topListItem" @click="goPath('/Video')">视频</li>
        <li class="topListItem" @click="goPath('/Singer')">歌手</li>
        <li class="topListItem" @click="goPath('/MyMusic')">我的音乐</li>
      </ul>
          <!-- 用户头像 -->
    </div>
    <div class="userHeader" @click="$router.replace('/login')">
      <img src="./images/liga.jpg" alt="">
    </div>
    
  </div>
</template>


<script>
// 这是顶部导航组件
export default {
  name:'TopList',
  methods: {
    goPath(path){
      this.$router.push(path)
    }
  },
}
</script>

<style lang="less" scoped>
  .topContainer{
    position: relative;
    width: 100%;
    height: 50px;
    background: #2F3542;
    box-shadow: 0 10px 20px rgb(47, 53, 66, 20%);
    box-sizing: border-box;
    overflow: hidden;
    .listContainer{
      position: absolute;
      left: 50%;
      margin-left: -25%;
      display: flex;
      width: 1200px;
      align-items: center;
      .topList{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        .topListItem{
          font-size: 17px;
          font-weight: 600;
          line-height: 50px;
          color: rgb(255, 255, 255,.5);
          padding: 0 30px;
          &:hover{
            background: #747D8C;
            transition: all .3s ease-out;
            cursor: pointer;
          }
        }

      }
    }
    .userHeader{ 
     position: absolute;
     left: 1300px;
      img{  
        width: 44px;
        height: 44px;
        border-radius: 10px;
        display: inline-block;
        transition: all .3s ease-out; 
        &:hover{
          border-radius: 50%;
          cursor: pointer;
          width: 48px;
          height: 48px;
        }
      }
    }
  
  }
</style>