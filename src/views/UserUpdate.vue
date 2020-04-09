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
            @change="selectFile"
            name
            id
            placeholder
            aria-describedby="fileHelpId"
          />
          <small id="fileHelpId" class="form-text text-muted">Help text</small>
        </div>
        <div class="form-group">
          <label for>パスワード</label>
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
        <button
          type="button"
          @click="infoUpdate"
          name
          id
          class="btn btn-primary btn-lg btn-block"
        >更新</button>
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
      icon: null
    };
  },
  created: function() {
    this.name = this.$store.getters.getName;
    this.email = this.$store.getters.getEmail;
  },
  methods: {
    /**
     * フォームで選択された画像をiconプロパティに代入
     */
    selectFile: function(e) {
      //画像は1つに限定させるため、０番目の要素を入れる
      this.icon = e.target.files[0];
    },
    
  }
};
</script>

<style>
</style>