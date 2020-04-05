<template>
  <div class="container">
    <h1>ログイン</h1>
    <p id="error">{{error}}</p>
    <div class="row">
      <form action method="post" id="loginfrom " class="col-md-6 offset-md-3 text-left">
        <div class="form-group">
          <label for>メールアドレス</label>
          <input
            type="email"
            class="form-control"
            v-model="email"
            name
            id
            aria-describedby="emailHelpId"
            placeholder
          />
        </div>
        <div class="form-group">
          <label for>パスワード</label>
          <input type="password" class="form-control" v-model="password" name id placeholder />
        </div>
        <button type="button" name id class="btn btn-primary btn-lg btn-block" @click="request">ログイン</button>
      </form>
    </div>
  </div>
</template>

<script>
import { _LaravelAPI } from '@/hostName.js';
export default {
  data: function() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async request() {
      //リクエストのデータ
      const requestdata = {
        email: this.email,
        password: this.password
      };

      //axiosによる通信
      const loginresdata = await this.axios.post(
        _LaravelAPI + '/login',
        requestdata
      );

      //ログインできなかったか？
      if (loginresdata.data.error) {
        console.log(loginresdata.data);
        this.error = 'メッセージとパスワードが違います。';
        return;
      }

      //ログイン状態の変更
      this.$store.commit('setLogin');
      //トークンの格納
      this.$store.commit('setAuthorization', loginresdata.data);

      //Jwtのトークンをヘッダーに格納
      this.axios.defaults.headers.common[
        'Authorization'
      ] = this.$store.getters.getAuthorization;

      //ユーザー情報の取得
      const userInfo_resdata = await this.axios.post(_LaravelAPI + '/me');

      //ユーザー情報の格納
      this.$store.commit('setUserInfo', userInfo_resdata.data);

      console.log(this.$store.state);

      //ホーム("/")へ遷移
      return this.$router.push('/');
    }
  }
};
</script>

<style>
#icon {
  width: 36px;
  height: 36px;
}
</style>