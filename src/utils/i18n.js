import Vue from 'vue';

Vue.use({
  install() {
    if (this.install.installed) {
      console.log('$lang already installed');
      return;
    }

    Vue.prototype.$lang = function(key) {
      if (this.$te(key)) {
        return this.$t(key);
      }
      return key;
    };
  }
});
