import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collect:[],
    sousuojilu:[]
  },
  mutations: {
    collectMethod:(state,all)=>{
      state.collect.push({
        id:all[0],
        title:all[1],
        destination:all[2],
        url:all[3],
        price:all[4]
      })
    },
    removeCollect:(state,index)=>{
      state.collect.splice(index,1)
    },
    sousuojilu:(state,city)=>{
      state.sousuojilu.push(city);
    }
    
  },
  actions: {
    
  },
  modules: {
  }
})
