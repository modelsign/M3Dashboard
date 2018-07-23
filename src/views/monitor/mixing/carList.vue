<template>
  <div class="mixing-container car-list">
    <div class="mixing-grid">
      <el-table height="500" :header-cell-style="headerStyle" :data="grid.gridTop" border style="width: 100%" :stripe="true">
        <el-table-column prop="id" label="序号" width="80"></el-table-column>
        <el-table-column prop="carId" label="车辆标号"></el-table-column>
        <el-table-column prop="guota" label="混凝土指标"></el-table-column>
        <el-table-column prop="code" label="混凝土类型编号"></el-table-column>
        <el-table-column prop="remark" label="备注"></el-table-column>
      </el-table>
      <el-pagination
        :current-page="1"
        style="float:right;margin-top:5px;"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="201">
      </el-pagination>
      <div class="clear"></div>
    </div>
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
              guota: 'C18035F90300W9014',
              code: 'HNT-001',
              remark: ''
            },
            {
              id: 2,
              carId: '川U 689y',
              guota: 'C18035F90300W9014',
              code: 'HNT-001',
              remark: ''
            },
            {
              id: 3,
              carId: '川U 689y',
              guota: 'C18035F90300W9014',
              code: 'HNT-001',
              remark: ''
            },
            {
              id: 4,
              carId: '川U 689y',
              guota: 'C18035F90300W9014',
              code: 'HNT-001',
              remark: ''
            },
            {
              id: 5,
              carId: '川U 689y',
              guota: 'C18035F90300W9014',
              code: 'HNT-001',
              remark: ''
            },
            {
              id: 6,
              carId: '川U 689y',
              guota: 'C18035F90300W9014',
              code: 'HNT-001',
              remark: ''
            },
            {
              id: 7,
              carId: '川U 689y',
              guota: 'C18035F90300W9014',
              code: 'HNT-001',
              remark: ''
            },
            {
              id: 8,
              carId: '川U 689y',
              guota: 'C18035F90300W9014',
              code: 'HNT-001',
              remark: ''
            },
            {
              id: 9,
              carId: '川U 689y',
              guota: 'C18035F90300W9014',
              code: 'HNT-001',
              remark: ''
            },
            {
              id: 10,
              carId: '川U 689y',
              guota: 'C18035F90300W9014',
              code: 'HNT-001',
              remark: ''
            }
          ]
        },
        stateDataSet: [
          {
            text: '生产状态',
            value: ''
          },
          {
            text: '尚未生产',
            value: '尚未生产'
          },
          {
            text: '正在生产',
            value: '正在生产'
          },
          {
            text: '完成生产',
            value: '完成生产'
          }
        ],
        periodDataSet: [
          {
            text: '标段',
            value: ''
          },
          {
            text: '1#标段',
            value: '1#标段'
          },
          {
            text: '2#标段',
            value: '2#标段'
          },
          {
            text: '3#标段',
            value: '3#标段'
          }
        ],
        buildDataSet: [
          {
            text: '拌合楼',
            value: ''
          },
          {
            text: '1#拌合楼',
            value: '1#拌合楼'
          },
          {
            text: '2#拌合楼',
            value: '2#拌合楼'
          },
          {
            text: '3#拌合楼',
            value: '3#拌合楼'
          }
        ]
      };
    }
  };
</script>

<style scoped>
  .clear{
    clear: both;
  }
</style>
