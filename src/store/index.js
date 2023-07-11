import { createStore } from "vuex";

export default createStore({
  state: {
    token:"",
    count:0
  },
  getters: {},
  mutations: {
    setToken:(state,payload) =>{
      state.token = payload
      localStorage.setItem("token",state.token)
  },
    addCount:(state,payload) =>{
      state.count+=1
    }

  },
  actions: {},
  modules: {},
});
