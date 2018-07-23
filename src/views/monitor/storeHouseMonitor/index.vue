<template>
  <div class="app-container">
    <el-tabs type="card" v-model="activePage">
      <el-tab-pane label="卸料匹配" name="dump">
        <dump/>
      </el-tab-pane>
      <el-tab-pane label="仓面监控" name="monitor">
        <monitor/>
      </el-tab-pane>
      <el-tab-pane label="振捣监控" name="vibration">
        <vibration :page="activePage"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import dump from './dump';
  import monitor from './monitor';
  import vibration from './vibration';
  export default {
    name: 'storeHouseMonitor',
    components: {
      dump,
      monitor,
      vibration
    },
    data() {
      return {
        activePage: 'dump'
      };
    }
  };
</script>

<style scoped>

</style>


