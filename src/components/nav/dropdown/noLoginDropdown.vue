<template>
  <div>
    <b-dropdown>
      <b-dropdown-item router-link to="/register">ユーザー登録</b-dropdown-item>
      <b-dropdown-item router-link to="/login">ログイン</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
    };
  }
};
</script>

<style>
#icon {
  width: 36px;
  height: 36px;
}
</style>
