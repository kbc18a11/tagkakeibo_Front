<template>
  <div>
    <img id="icon" :src="imgPath" alt />
    <b-dropdown>
      <b-dropdown-item href="">??????</b-dropdown-item>
      <b-dropdown-item href="">????</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
import { _S3 } from '@/hostName';
export default {
  data: function() {
    return {
      imgPath: _S3 + '/icon/dmXOpHyBfNVNraMkWQpCbzZPsV5xtPHXloQ5le5a.png',
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
