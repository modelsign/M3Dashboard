import Vue from 'vue';

const getQueryString = function(name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  const r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
};

const ENV_INTEGRAGE_CODE = '1';
const ENV_INTEGRAGE_PARAM = 'integrate';

Vue.use({
  install(_Vue) {
    /**
     * Integrate = 1 表示集成环境 不展示侧边菜单栏以及导航
     */
    const integrate = getQueryString(ENV_INTEGRAGE_PARAM);
    _Vue.mixin({
      methods: {
        hasNavigator() {
          return integrate !== ENV_INTEGRAGE_CODE;
        }
      }
    });
  }
});
