<template>
  <div class="mixing-container dump-list">
    <div class="mixing-search">
      <el-select v-model="search.build" placeholder="拌合楼">
        <el-option
          v-for="item in buildDataSet"
          :key="item.value"
          :label="item.text"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="search.period" placeholder="标段">
        <el-option
          v-for="item in periodDataSet"
          :key="item.value"
          :label="item.text"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="search.pos" placeholder="部位">
        <el-option
          v-for="item in posDataSet"
          :key="item.value"
          :label="item.text"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input placeholder="车辆" v-model="search.carId" style="width:200px;"></el-input>
      <el-date-picker value-format="yyyy-MM-dd" v-model="search.startTime" type="date" placeholder="开始时间"></el-date-picker>
      <el-date-picker value-format="yyyy-MM-dd" v-model="search.endTime" type="date" placeholder="结束时间"></el-date-picker>
      <el-button type="primary">查询</el-button>
    </div>
    <div class="mixing-grid">
      <el-table height="500" :header-cell-style="headerStyle" :data="grid.gridTop" border style="width: 100%" :stripe="true">
        <el-table-column prop="id" label="序号" width="80"></el-table-column>
        <el-table-column prop="carId" label="车辆编号"></el-table-column>
        <el-table-column prop="guota" label="混凝土指标"></el-table-column>
        <el-table-column prop="code" label="混凝土类型编号"></el-table-column>
        <el-table-column prop="target" label="目标仓面"></el-table-column>
        <el-table-column prop="request" label="仓面需求料性"></el-table-column>
        <el-table-column prop="match" label="匹配性"></el-table-column>
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
    name: 'dumpList',
    data() {
      return {
        headerStyle: {
          backgroundColor: '#409EFF',
          color: '#FFF'
        },
        search: {
          build: '',
          period: '',
          carId: '',
          pos: '',
          startTime: '',
          endTime: ''
        },
        grid: {
          gridTop: [
            {
              'id': 1,
              'carId': '川U 7782',
              'guota': 'C180-35 F90-300 W90-85',
              'code': 'HNT-004',
              'target': '仓面001',
              'request': 'Susan Miller',
              'match': '匹配',
              'remark': '主方格行少分合生务。'
            },
            {
              'id': 2,
              'carId': '川U 3784',
              'guota': 'C180-35 F90-300 W90-19',
              'code': 'HNT-003',
              'target': '仓面001',
              'request': 'Laura Hernandez',
              'match': '匹配',
              'remark': '设转张走率装年内低。'
            },
            {
              'id': 3,
              'carId': '川U 8521',
              'guota': 'C180-35 F90-300 W90-12',
              'code': 'HNT-001',
              'target': '仓面004',
              'request': 'Kevin Clark',
              'match': '匹配',
              'remark': '管美特一十马引算领。'
            },
            {
              'id': 4,
              'carId': '川U 3831',
              'guota': 'C180-35 F90-300 W90-70',
              'code': 'HNT-008',
              'target': '仓面003',
              'request': 'Carol Robinson',
              'match': '匹配',
              'remark': '商话构么感才米进长提。'
            },
            {
              'id': 5,
              'carId': '川U 2994',
              'guota': 'C180-35 F90-300 W90-21',
              'code': 'HNT-008',
              'target': '仓面007',
              'request': 'Scott Young',
              'match': '匹配',
              'remark': '商而商形实路适合局知。'
            },
            {
              'id': 6,
              'carId': '川U 2016',
              'guota': 'C180-35 F90-300 W90-26',
              'code': 'HNT-005',
              'target': '仓面009',
              'request': 'Cynthia Lee',
              'match': '匹配',
              'remark': '非表次走南间发。'
            },
            {
              'id': 7,
              'carId': '川U 4772',
              'guota': 'C180-35 F90-300 W90-30',
              'code': 'HNT-008',
              'target': '仓面006',
              'request': 'Maria Miller',
              'match': '匹配',
              'remark': '月给法回术比本界到。'
            },
            {
              'id': 8,
              'carId': '川U 7784',
              'guota': 'C180-35 F90-300 W90-17',
              'code': 'HNT-002',
              'target': '仓面006',
              'request': 'Kevin Johnson',
              'match': '匹配',
              'remark': '容风飞老争接更安素。'
            },
            {
              'id': 9,
              'carId': '川U 2224',
              'guota': 'C180-35 F90-300 W90-38',
              'code': 'HNT-005',
              'target': '仓面002',
              'request': 'Margaret Hall',
              'match': '匹配',
              'remark': '复百最就除八有点千。'
            },
            {
              'id': 10,
              'carId': '川U 5356',
              'guota': 'C180-35 F90-300 W90-56',
              'code': 'HNT-006',
              'target': '仓面004',
              'request': 'Patricia Jackson',
              'match': '匹配',
              'remark': '作则平记题活此采。'
            }
          ]
        },
        posDataSet: [
          {
            text: '部位',
            value: ''
          },
          {
            text: '部位1',
            value: '部位1'
          },
          {
            text: '部位2',
            value: '部位2'
          },
          {
            text: '部位3',
            value: '部位3'
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
  .mixing-grid{
    margin-top: 15px;
  }

  .clear{
    clear: both;
  }

  .carInput input{
    width: 200px !important;
  }
</style>
