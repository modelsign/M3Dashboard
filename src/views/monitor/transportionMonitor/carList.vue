<template>
  <div class="mixing-container car-list">
    <el-table height="500" :header-cell-style="headerStyle" :data="grid.gridTop" border style="width: 100%" :stripe="true">
      <el-table-column prop="id" label="序号" width="80"></el-table-column>
      <el-table-column prop="carId" label="车辆编号"></el-table-column>
      <el-table-column prop="carType" label="车辆类型"></el-table-column>
      <el-table-column prop="depart" label="所属单位"></el-table-column>
      <el-table-column prop="useStatus" label="使用状态"></el-table-column>
    </el-table>
    <el-pagination
      :current-page="1"
      style="float:right;margin-top:5px;"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="201">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'carList',
  data() {
    return {
      headerStyle: {
        backgroundColor: '#409EFF',
        color: '#FFF'
      },
      search: {
        build: '',
        period: '',
        state: '正在生产',
        startTime: '',
        endTime: ''
      },
      grid: {
        gridTop: [
          {
            id: 1,
            carId: '川U 689y',
            carType: '挂车',
            depart: 'HNT-001',
            useStatus: '空闲'
          },
          {
            id: 2,
            carId: '川U 689y',
            carType: '罐车',
            depart: 'HNT-001',
            useStatus: '在用'
          },
          {
            id: 3,
            carId: '川U 689y',
            carType: '罐车',
            depart: 'HNT-001',
            useStatus: '在用'
          },
          {
            id: 4,
            carId: '川U 689y',
            carType: '罐车',
            depart: 'HNT-001',
            useStatus: '在用'
          },
          {
            carId: '川U 689y',
            carType: '挂车',
            depart: 'HNT-001',
            useStatus: '空闲'
          },
          {
            id: 6,
            carId: '川U 689y',
            carType: '挂车',
            depart: 'HNT-001',
            useStatus: '空闲'
          },
          {
            id: 7,
            carId: '川U 689y',
            carType: '挂车',
            depart: 'HNT-001',
            useStatus: '空闲'
          },
          {
            id: 8,
            carId: '川U 689y',
            carType: '挂车',
            depart: 'HNT-001',
            useStatus: '空闲'
          },
          {
            id: 9,
            carId: '川U 689y',
            carType: '挂车',
            depart: 'HNT-001',
            useStatus: '空闲'
          },
          {
            id: 10,
            carId: '川U 689y',
            carType: '挂车',
            depart: 'HNT-001',
            useStatus: '空闲'
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
</style>
