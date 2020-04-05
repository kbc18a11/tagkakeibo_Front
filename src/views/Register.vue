<template>
  <div class="container">
    <h1>ユーザー登録</h1>
    <p id="error">{{error}}</p>
    <div class="row">
      <form action method="post" id="loginfrom " class="col-md-6 offset-md-3 text-left">
        <div class="form-group">
          <label for>名前</label>
          <input
            type="text"
            v-model="name"
            name
            id
            class="form-control"
            placeholder
            aria-describedby="helpId"
          />
        </div>
        <div class="form-group">
          <label for>メールアドレス</label>
          <input
            type="email"
            v-model="email"
            class="form-control"
            name
            id
            aria-describedby="emailHelpId"
            placeholder
          />
        </div>
        <div class="form-group">
          <label for>パスワード</label>
          <input type="password" v-model="password" class="form-control" name id placeholder />
          <small id="emailHelpId" class="form-text text-muted">8文字以上でよろしくお願いします</small>
        </div>
        <div class="form-group">
          <label for>パスワードの確認</label>
          <input
            type="password"
            v-model="password_confirmation"
            class="form-control"
            name
            id
            placeholder
          />
        </div>
        <button
          type="button"
          name
          id
          class="btn btn-primary btn-lg btn-block"
          @click="request"
        >ユーザー登録</button>
      </form>
    </div>
  </div>
</template>

<script>
import { _LaravelAPI } from '@/hostName.js';

export default {
  data: function() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      error: ''
    };
  },
  methods: {
    async request() {
      //リクエストのデータ
      const requestdata = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      };
      //ユーザー登録
      const createresdata = await this.axios.post(
        _LaravelAPI + '/createuser',
        requestdata
      );
      console.log(createresdata);

      //登録できなかったか？
      if (!createresdata.data.createResult) {
        //エラーメッセージの表示
        this.error = '入力に間違いがあります。';
        return;
      }

      //ログイン
      const loginresdata = await this.axios.post(
        _LaravelAPI + '/login',
        requestdata
      );
      console.log(loginresdata);

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
#error {
  color: red;
}
</style>