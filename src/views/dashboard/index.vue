<template>
  <div class="dashboard-container">
    <button @click="change('zh')">中文</button>
    <button @click="change('en')">英文</button>
    <div>{{$lang('system.name')}}</div>
    <div class="dashboard-text">name:{{name}}</div>
    <div class="dashboard-text">roles:<span v-for='role in roles' :key='role'>{{role}}</span></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Cookies from 'js-cookie';
export default {
  name: 'dashboard',
  computed: {
    ...mapGetters(['name', 'roles'])
  },
  methods: {
    change(lan) {
      Cookies.set('language', lan);
      this.$i18n.locale = lan;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
