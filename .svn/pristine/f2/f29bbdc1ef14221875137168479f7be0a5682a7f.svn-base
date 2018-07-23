<template>
  <div class="mixing-container plan-list">
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
      <el-select v-model="search.state" placeholder="生产状态">
        <el-option
          v-for="item in stateDataSet"
          :key="item.value"
          :label="item.text"
          :value="item.value">
        </el-option>
      </el-select>
      <el-date-picker value-format="yyyy-MM-dd" v-model="search.startTime" type="date" placeholder="开始时间"></el-date-picker>
      <el-date-picker value-format="yyyy-MM-dd" v-model="search.endTime" type="date" placeholder="结束时间"></el-date-picker>
      <el-button type="primary">查询</el-button>
    </div>
    <div class="mixing-grid">
      <el-table :header-cell-style="headerStyle" :data="grid.gridTop" border style="width: 100%" :stripe="true">
        <el-table-column prop="id" label="序号" width="80"></el-table-column>
        <el-table-column prop="pos" label="部位"></el-table-column>
        <el-table-column prop="guota" label="混凝土指标"></el-table-column>
        <el-table-column prop="code" label="砼类型编号"></el-table-column>
        <el-table-column prop="total" label="方量" width="100"></el-table-column>
        <el-table-column prop="now" label="已生产方量" width="100"></el-table-column>
        <el-table-column prop="startTime" label="预计开始时间" width="150"></el-table-column>
        <el-table-column prop="endTime" label="预计结束时间" width="150"></el-table-column>
        <el-table-column prop="publisher" label="发起人" width="100"></el-table-column>
        <el-table-column prop="auditor" label="审批人" width="100"></el-table-column>
        <el-table-column prop="state" label="状态" width="80"></el-table-column>
      </el-table>
      <el-pagination
        :current-page="1"
        style="float:right;margin-top:5px;"
        :page-sizes="[5]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="17">
      </el-pagination>
      <div class="clear"></div>
    </div>
    <div class="mixing-grid">
      <el-table :header-cell-style="headerStyle" :data="grid.gridTop" border style="width: 100%" :stripe="true">
        <el-table-column prop="id" label="序号" width="80"></el-table-column>
        <el-table-column prop="pos" label="料性"></el-table-column>
        <el-table-column prop="guota" label="混凝土指标"></el-table-column>
        <el-table-column prop="code" label="混凝土类型编号"></el-table-column>
        <el-table-column prop="total" label="方量" width="100"></el-table-column>
        <el-table-column prop="now" label="已生产方量" width="100"></el-table-column>
        <el-table-column prop="startTime" label="预计开始时间" width="150"></el-table-column>
        <el-table-column prop="endTime" label="预计结束时间" width="150"></el-table-column>
        <el-table-column prop="publisher" label="发起人" width="100"></el-table-column>
        <el-table-column prop="auditor" label="审批人" width="100"></el-table-column>
        <el-table-column prop="state" label="状态" width="80"></el-table-column>
      </el-table>
      <el-pagination
        :current-page="1"
        style="float:right;margin-top:5px;"
        :page-sizes="[5]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="17">
      </el-pagination>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'planList',
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
              pos: '进水塔1#EL2845m',
              guota: 'C18035F90300W9014',
              code: 'HNT-001',
              total: '1230',
              now: '960',
              startTime: '2018-7-6 16:19',
              endTime: '2018-7-6 16:19',
              publisher: '张XX',
              auditor: '李XX',
              state: '正在生产'
            },
            {
              id: 2,
              pos: '进水塔1#EL2845m',
              guota: 'C18035F90300W9014',
              code: 'HNT-001',
              total: '1230',
              now: '960',
              startTime: '2018-7-6 16:19',
              endTime: '2018-7-6 16:19',
              publisher: '张XX',
              auditor: '李XX',
              state: '正在生产'
            },
            {
              id: 3,
              pos: '进水塔1#EL2845m',
              guota: 'C18035F90300W9014',
              code: 'HNT-001',
              total: '1230',
              now: '960',
              startTime: '2018-7-6 16:19',
              endTime: '2018-7-6 16:19',
              publisher: '张XX',
              auditor: '李XX',
              state: '正在生产'
            },
            {
              id: 4,
              pos: '进水塔1#EL2845m',
              guota: 'C18035F90300W9014',
              code: 'HNT-001',
              total: '1230',
              now: '960',
              startTime: '2018-7-6 16:19',
              endTime: '2018-7-6 16:19',
              publisher: '张XX',
              auditor: '李XX',
              state: '正在生产'
            },
            {
              id: 5,
              pos: '进水塔1#EL2845m',
              guota: 'C18035F90300W9014',
              code: 'HNT-001',
              total: '1230',
              now: '960',
              startTime: '2018-7-6 16:19',
              endTime: '2018-7-6 16:19',
              publisher: '张XX',
              auditor: '李XX',
              state: '正在生产'
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
  .mixing-grid{
    margin-top: 15px;
  }

  .mixing-grid:last-child{
    margin-top: 30px;
  }

  .clear{
    clear: both;
  }
</style>
