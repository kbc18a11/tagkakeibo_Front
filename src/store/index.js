import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//ユーザー情報
export default new Vuex.Store({
  state: {
    nowlogin: false,//ログインしてるか？
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    checklogin(state) {
      return state.nowlogin;
    }
  }
});
