<template>
  <div class="container">
    <h1>ユーザー登録</h1>
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
          <small id="helpId" class="text-muted">Help text</small>
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
          <small id="emailHelpId" class="form-text text-muted">Help text</small>
        </div>
        <div class="form-group">
          <label for>パスワード</label>
          <input type="password" v-model="password" class="form-control" name id placeholder />
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
      password_confirmation: ''
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
      //axiosによる通信
      const resdata = await this.axios.post(_LaravelAPI + '/createuser', requestdata);
      console.log(resdata.data);
    }
  }
};
</script>

<style>
</style>