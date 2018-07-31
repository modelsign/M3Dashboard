<template>
  <section class="app-main" :style="getAppMainStyle">
    <transition name="fade" mode="out-in">
      <!-- <router-view :key="key"></router-view> -->
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    getAppMainStyle() {
      if (this.hasNavigator()) {
        return {
          height: 'calc(100% - 70px)'
        };
      } else {
        return {
          height: 'calc(100% - 20px)'
        };
      }
    }
  }
};
</script>
