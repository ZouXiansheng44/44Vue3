import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sex:'',
      hobby:[],
      interest:''
  },
  mutations: {
    passSex(state,sex){
        state.sex=sex
        //state.user=v;
    },
      passHobby(state,hobby){
          state.hobby=hobby
      },
      passInterest(state,interest){
        state.interest=interest
      }
  },
  actions: {

  }
})
