import Vue from 'vue'
import Vuex from 'vuex'
import {getGoodsMusic} from '../api'
import {getMusicUrl} from '../api'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    musicTag:{},  //选中的热门歌单数据
    newMusic:{},  //新歌速递数据
    sheetContainer:{},   //歌单详情
    musicId:-1,    //music下标
    songId:0    //歌曲id
  },
  mutations: {
    //请求热门歌单
    REQMUSICTAG:function(state,tags){
      state.musicTag = tags
    },
    // 请求新歌速递
    REQNEWMUSIC:function(state,type){
      state.newMusic = type
    },
    //歌单详情
    REQSHHEETCONTAINER:function(state,id){
      state.sheetContainer = id
    },
    //请求musicID
    REQMUSICID:function(state,id){
      state.musicId = id
    },
    REQSONGID:function(state,id){
      state.songId = id
      // console.log(state.songId);
    }
  },
  actions: {
    async reqMusicTag(content,tags){
      let result = await getGoodsMusic(tags)
      console.log('getGoodsMusic',result);
      content.commit('REQMUSICTAG',result)
    },
    // async reqmusicid(content,id){
    //   let result = await getMusicUrl(id)
    //   console.log('getMusicUrl',result);
    //   content.commit('REQMUSICID',result)
    // }
  },
  modules: {
  }
})
