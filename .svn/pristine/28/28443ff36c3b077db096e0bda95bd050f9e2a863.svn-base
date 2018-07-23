<template>
  <div class="app-container">
    <div class="search">
      <el-select v-model="search.segment" placeholder="标段">
        <el-option
          v-for="item in segments"
          :key="item.value"
          :label="item.text"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="search.partial" placeholder="分部工程">
        <el-option
          v-for="item in partials"
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
    <el-row :gutter="10">
      <el-col :span="12">
        <div class="table-info">
          <div class="table-top">
            <span>浇筑仓面列表</span>
          </div>
          <el-table
            border
            height="600"
            :data="storehouseSurface"
            style="width: 100%">
            <el-table-column
              fixed
              prop="segment"
              label="标段"
              width="240">
            </el-table-column>
            <el-table-column
              fixed
              prop="partial"
              label="分部工程"
              width="240">
            </el-table-column>
            <el-table-column
              prop="startTime"
              label="开始时间">
            </el-table-column>
            <el-table-column
              prop="endTime"
              label="结束时间">
            </el-table-column>
          </el-table>
          <el-pagination
            style="float:right;margin-top:5px;"
            :current-page="1"
            :page-sizes="[20, 50, 100]"
            :page-size="20"
            layout="total, sizes, prev, pager, next, jumper"
            :total="235">
          </el-pagination>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="table-info">
          <div class="table-top">
            <span>车辆使用列表</span>
          </div>
          <el-table
            border
            height="600"
            :data="carStatus"
            style="width: 100%">
            <el-table-column
              fixed
              prop="carId"
              label="序号"
              width="240">
            </el-table-column>
            <el-table-column
              fixed
              prop="carNumber"
              label="车辆"
              width="240">
            </el-table-column>
            <el-table-column
              prop="workTotal"
              label="累积运输量">
            </el-table-column>
            <el-table-column
              prop="workHours"
              label="工作时长">
            </el-table-column>
          </el-table>
          <el-pagination
            style="float:right;margin-top:5px;"
            :current-page="1"
            :page-sizes="[20, 50, 100]"
            :page-size="20"
            layout="total, sizes, prev, pager, next, jumper"
            :total="124">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'transportationControl',
  data() {
    return {
      search: {
        segment: '',
        partial: '',
        startTime: '',
        endTime: ''
      },
      segments: [
        {
          text: '标段',
          value: ''
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
      partials: [
        {
          text: '标段',
          value: ''
        },
        {
          text: '引发水电标',
          value: '1'
        },
        {
          text: '引发水电标',
          value: '2'
        },
        {
          text: '引发水电标',
          value: '3'
        }
      ],
      storehouseSurface: [
        {
          segment: '进水塔1#进水口EL2805m',
          partial: 'XXX分部',
          startTime: '2018-05-03',
          endTime: '2018-09-13'
        },
        {
          segment: '泄洪洞1+234边墙',
          partial: 'XXX分部',
          startTime: '2018-05-03',
          endTime: '2018-09-13'
        },
        {
          segment: 'XXX部位XXX单元工程',
          partial: 'XXX分部',
          startTime: '2018-05-03',
          endTime: '2018-09-13'
        }
      ],
      carStatus: [
        {
          carId: 12345,
          carNumber: '川A88888',
          workTotal: '400吨',
          workHours: '34小时'
        },
        {
          carId: 22345,
          carNumber: '川A88881',
          workTotal: '200吨',
          workHours: '14小时'
        },
        {
          carId: 32345,
          carNumber: '川A88882',
          workTotal: '200吨',
          workHours: '14小时'
        },
        {
          carId: 42345,
          carNumber: '川A88883',
          workTotal: '200吨',
          workHours: '14小时'
        }
      ]
    };
  }
};
</script>

<style scoped>
  .search{
    margin: 10px 0;
  }
  .table-info .table-top {
    height: 50px;
    line-height: 50px;
    padding-left: 15px;
    background-color: #409eff;
    font-size: 18px;
    color: #fff;
  }
</style>


