<template>
  <div>
    <img id="icon" :src="imgPath" alt />
    <b-dropdown>
      <b-dropdown-item href>??????</b-dropdown-item>
      <b-dropdown-item router-link to="/userUpdate">ユーザー情報</b-dropdown-item>
      <b-dropdown-item @click="dologout">ログアウト</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
import { _S3 } from '@/hostName';
export default {
  data: function() {
    return {
      imgPath: _S3 + '/icon/dmXOpHyBfNVNraMkWQpCbzZPsV5xtPHXloQ5le5a.png'
    };
  },
  methods: {
    dologout: async function() {
      //ログアウトに変更
      this.$store.commit('setLogout');
      //ホーム("/")へ遷移

      //親（navber）のdologout実行
      this.$emit('logout');

      //ホームへ遷移
      return await this.$router.push(
        '/',
        () => {},
        () => {}
      );
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
