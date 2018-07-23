<template>
  <div class="mixing-container car-list">
     <div class="search">
      <el-select v-model="search.segment" placeholder="标段">
        <el-option
          v-for="item in segments"
          :key="item.value"
          :label="item.text"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="search.carId" placeholder="车辆编号">
        <el-option
          v-for="item in carIds"
          :key="item.value"
          :label="item.text"
          :value="item.value">
        </el-option>
      </el-select>
      <el-date-picker
        v-model="search.startTime"
        type="date"
        placeholder="开始时间">
      </el-date-picker>
      <el-date-picker
        v-model="search.endTime"
        type="date"
        placeholder="结束时间">
      </el-date-picker>
      <el-button type="primary">查询</el-button>
    </div>
    <el-table height="500" :header-cell-style="headerStyle" :data="grid.gridTop" border style="width: 100%" :stripe="true">
      <el-table-column prop="id" label="序号" width="80"></el-table-column>
      <el-table-column prop="carId" label="车辆编号"></el-table-column>
      <el-table-column prop="warningTime" label="预警时间"></el-table-column>
      <el-table-column prop="transTime" label="运输时长"></el-table-column>
      <el-table-column prop="partition" label="浇筑部位"></el-table-column>
      <el-table-column prop="concreteType" label="混泥土类型"></el-table-column>
      <el-table-column prop="handleStatus" label="处理状态">
        <template slot-scope="scope">
          <el-button
            v-if="scope.row.notHandle"
            type="success"
            size="mini">待处理</el-button>
          <span v-else>{{scope.row.handleStatus}}</span>
        </template>
      </el-table-column>
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
      segments: [
        {
          text: '标段',
          value: 'a'
        },
        {
          text: '标段1',
          value: '标段1'
        },
        {
          text: '标段2',
          value: '标段2'
        },
        {
          text: '标段3',
          value: '标段3'
        }
      ],
      carIds: [
        {
          text: '川U 689y',
          value: '1'
        },
        {
          text: '川U 689y',
          value: '1'
        }
      ],
      search: {
        segment: '',
        carId: '',
        startTime: '',
        endTime: ''
      },
      grid: {
        gridTop: [
          {
            id: 1,
            carId: '川U 689y',
            warningTime: '2018-07-10 15:32',
            transTime: '46分钟',
            partition: '进水塔1#进水口EL2805m',
            concreteType: '3#',
            handleStatus: '',
            notHandle: true
          },
          {
            id: 2,
            carId: '川U 689y',
            warningTime: '2018-07-10 15:32',
            transTime: '46分钟',
            partition: '进水塔1#进水口EL2805m',
            concreteType: '3#',
            handleStatus: '',
            notHandle: true
          },
          {
            id: 3,
            carId: '川U 689y',
            warningTime: '2018-07-10 15:32',
            transTime: '46分钟',
            partition: '进水塔1#进水口EL2805m',
            concreteType: '3#',
            handleStatus: '业主处理'
          },
          {
            id: 4,
            carId: '川U 689y',
            warningTime: '2018-07-10 15:32',
            transTime: '46分钟',
            partition: '进水塔1#进水口EL2805m',
            concreteType: '3#',
            handleStatus: '业主处理'
          },
          {
            id: 5,
            carId: '川U 689y',
            warningTime: '2018-07-10 15:32',
            transTime: '46分钟',
            partition: '进水塔1#进水口EL2805m',
            concreteType: '3#',
            handleStatus: '监理处理'
          },
          {
            id: 6,
            carId: '川U 689y',
            warningTime: '2018-07-10 15:32',
            transTime: '46分钟',
            partition: '进水塔1#进水口EL2805m',
            concreteType: '3#',
            handleStatus: '总监处理'
          },
          {
            id: 7,
            carId: '川U 689y',
            warningTime: '2018-07-10 15:32',
            transTime: '46分钟',
            partition: '进水塔1#进水口EL2805m',
            concreteType: '3#',
            handleStatus: '',
            notHandle: true
          },
          {
            id: 8,
            carId: '川U 689y',
            warningTime: '2018-07-10 15:32',
            transTime: '46分钟',
            partition: '进水塔1#进水口EL2805m',
            concreteType: '3#',
            handleStatus: '业主处理'
          },
          {
            id: 9,
            carId: '川U 689y',
            warningTime: '2018-07-10 15:32',
            transTime: '46分钟',
            partition: '进水塔1#进水口EL2805m',
            concreteType: '3#',
            handleStatus: '总监处理'
          },
          {
            id: 10,
            carId: '川U 689y',
            warningTime: '2018-07-10 15:32',
            transTime: '46分钟',
            partition: '进水塔1#进水口EL2805m',
            concreteType: '3#',
            handleStatus: '业主处理'
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.search {
  margin: 10px 0;
}
</style>
