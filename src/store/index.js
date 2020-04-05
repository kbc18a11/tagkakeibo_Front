
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate"; //←読み込む

Vue.use(Vuex);

//ユーザー情報
export default new Vuex.Store({
  state: {
    nowlogin: false,//ログインしてるか？
    name: null,
    email: null,
    icon: null,
    Authorization: null,//認証用トークン
  },
  mutations: {
    /**
     * ログイン開始
     * @param {*} state 
     */
    setLogin(state) {
      state.nowlogin = true;
    },
    /**
     * ログイン開始
     * @param {*} state 
     */
    setLogout(state) {
      state.nowlogin = false;
    },
    /**
     * ユーザー情報の格納
     * @param {*} state 
     * @param {object} payload 
     */
    setUserInfo(state, payload) {
      state.name = payload.name;
      state.email = payload.email;
      state.icon = payload.icon;
    },
    /**
     * トークンの格納
     * @param {*} state 
     * @param {object} payload
     */
    setAuthorization(state, payload) {
      state.Authorization = 'Bearer '+ payload.access_token;
    },
  },
  actions: {},
  modules: {},
  getters: {
    /**
     * ログインのチェック
     * @param {*} state 
     */
    checklogin(state) {
      return state.nowlogin;
    },
    /**
     * トークンの取得
     * @param {*} state 
     */
    getAuthorization(state) {
      return state.Authorization;
    },
    /**
     * ユーザー情報の取得
     * @param {*} state 
     */
    getUserInfo(state) {
      return [state.name, state.email, state.icon];
    },
  },
  plugins: [createPersistedState({ storage: window.sessionStorage })]
});
