<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
    <router-link class="navbar-brand" to="/">タグ家計簿</router-link>
    <button
      class="navbar-toggler d-lg-none"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavId"
      aria-controls="collapsibleNavId"
      aria-expanded="false"
      aria-label="Toggle navigation"
    ></button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            Home
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <component :is="dropdownMenu" @logout="dologout" />
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>
import noLoginDropdown from '@/components/nav/dropdown/noLoginDropdown.vue';
import nowLoginDropdown from '@/components/nav/dropdown/nowLoginDropdown.vue';

export default {
  components: {
    noLoginDropdown,
    nowLoginDropdown
  },
  data: function() {
    return {
      dropdownMenu: 'noLoginDropdown'
    };
  },
  mounted: function() {
    //ログイン状態の確認
    const nowlogin = this.$store.getters.checklogin;
    //ログインしていれば、ログインしてるときのメニューを表示
    if (nowlogin) this.dropdownMenu = 'nowLoginDropdown';
  },
  watch: {
    $route: function(to, from) {
      if (to.path !== from.path) {
        //ログイン状態の確認
        const nowlogin = this.$store.getters.checklogin;
        //ログインしていれば、ログインしてるときのメニューを表示
        if (nowlogin) this.dropdownMenu = 'nowLoginDropdown';
      }
    }
  },
  methods: {
    dologout: function() {
      //ログイン状態の確認
      const nowlogin = this.$store.getters.checklogin;
      //ログインしてなければ、ログインしてないときのメニューを表示
      if (!nowlogin) this.dropdownMenu = 'noLoginDropdown';

    }
  }
};
</script>

<style>
</style>