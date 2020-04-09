
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate"; //←読み込む

Vue.use(Vuex);

//ユーザー情報
export default new Vuex.Store({
  state: {
    nowlogin: false,//ログインしてるか？
    id: null,
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
     * ログアウト開始
     * @param {*} state 
     */
    setLogout(state) {
      state.nowlogin = false;
      state.id = null;
      state.name = null;
      state.email = null;
      state.icon = null;
      state.Authorization = null;
    },
    /**
     * ユーザー情報の格納
     * @param {*} state 
     * @param {object} payload 
     */
    setUserInfo(state, payload) {
      state.id = payload.id;
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
      state.Authorization = 'Bearer ' + payload.access_token;
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
      return [state.id, state.name, state.email, state.icon];
    },
    /**
     * ユーザーidの取得
     * @param {*} state 
     */
    getId(state) {
      return state.id;
    },
    /**
     * ユーザーネーム取得
     * @param {*} state 
     */
    getName(state) {
      return state.name;
    },
    /**
     * メールアドレス取得
     * @param {*} state 
     */
    getEmail(state) {
      return state.email;
    },
  },
  plugins: [createPersistedState({ storage: window.sessionStorage })]
});
