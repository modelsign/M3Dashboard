<template>
  <div class="app-container">
    <el-tabs type="card" v-model="activeName">
      <el-tab-pane label="车辆列表" name="carList"><car-list/></el-tab-pane>
      <el-tab-pane label="实时位置" name="realLocation"><real-location/></el-tab-pane>
      <el-tab-pane label="运输预警" name="transWarning"><trans-warning/></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import carList from './carList';
import realLocation from './realLocation';
import transWarning from './transWarning';

export default {
  name: 'transportionMonitor',
  data() {
    return {
      activeName: 'carList'
    };
  },
  components: {
    carList,
    realLocation,
    transWarning
  },
  methods: {}
};
</script>

<style scoped>
</style>


