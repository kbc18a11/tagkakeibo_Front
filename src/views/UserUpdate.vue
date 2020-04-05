<template>
  <div class="container">
    <h1>ユーザー情報</h1>
    <div class="row">
      <form action method="post" id="loginfrom " class="col-md-6 offset-md-3 text-left">
        <div class="form-group">
          <label for>名前</label>
          <input
            type="text"
            class="form-control"
            v-model="name"
            name
            id
            aria-describedby="helpId"
            placeholder
          />
        </div>
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
          <label for>アイコン画像</label>
          <input
            type="file"
            class="form-control-file"
            name
            id
            placeholder
            aria-describedby="fileHelpId"
          />
          <small id="fileHelpId" class="form-text text-muted">Help text</small>
        </div>
        <div class="form-group">
          <label for>パスワード</label>
          <img :src="icon" />
          <input type="password" class="form-control" v-model="password" name id placeholder />
          <small id="helpId" class="form-text text-muted">8文字以上のご入力をお願いします</small>
        </div>
        <div class="form-group">
          <label for>パスワードの確認</label>
          <input
            type="password"
            class="form-control"
            v-model="password_confirmation"
            name
            id
            placeholder
          />
          <small id="helpId" class="form-text text-muted">8文字以上のご入力をお願いします</small>
        </div>
        <button type="button" name id class="btn btn-primary btn-lg btn-block">更新</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      error: '',
      icon: ''
    };
  },
  created: {}
};
</script>

<style>
</style>