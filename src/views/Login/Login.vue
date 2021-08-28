<template>
  <div class="container">
    <div class="bg">
      <img src="./images/naer.jpg" alt="">
    </div>
      <div class="login">
        <div class="title">登录</div>
          <span>手机号</span>:<input class="phone" v-model="phone" placeholder="输入手机号" type="text">
          <span>密 &nbsp; 码</span>: <input v-model="password" placeholder="输入密码" class="password" type="pssword">
        <div class="log" @click="login">
          登录
        </div>
     </div>
  </div>
</template>

<script>
export default {
  name:'Login',
  data() {
    return {
      phone:'',
      password:''
    }
  },
  methods: {
    login(){
      
    }
  },
}
</script>

<style lang="less" scoped>
  .container{
    .bg{
      img{
        position: relative;
        width: 100%;
      }
    }
    .login{
      width: 400px;
      height: 300px;
      position: absolute;
      top: 50%;
      margin-top: -200px;
      left: 50%;
      margin-left: -150px;
      background: rgba(0, 0, 0, .3);
      color: #fff;
      border-radius: 5px;
      .title{
        font-size: 30px;
          margin: 10px 170px;
      }
      span{
          margin-left: 50px;
      }
      .phone{
          outline:none;  
          border:none;
          opacity: 0.1;
          width: 240px;
         
      }
      .password{
        margin-top: 20px;
         outline:none;  
          border:none;
          opacity: 0.1;
           width: 240px;
      }
      .log{
        position: absolute;
        width: 80px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        top:50%;
        left: 50%;
        margin-left: -40px;
        transition: all .4s linear;
          
          &:hover{
            font-weight: 600px;
            font-size: 20px;
            transition: all .4s linear;
          }
      }
    }
  }
</style>