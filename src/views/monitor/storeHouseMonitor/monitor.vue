<template>
  <div>
    <div class="house-item">
      <div class="house-top">实时监控</div>
      <div class="house-grid">
        <el-table :data="grid.top" border :stripe="true">
          <el-table-column prop="period" label="标段"></el-table-column>
          <el-table-column prop="target" label="仓面"></el-table-column>
          <el-table-column prop="time" label="时间" width="150"></el-table-column>
          <el-table-column prop="remark" label="异常事件描述"></el-table-column>
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
    <div class="house-item">
      <div class="house-top">历史查询</div>
      <div class="search">
        <el-select v-model="search.period" placeholder="标段">
          <el-option
            v-for="item in periodDataSet"
            :key="item.value"
            :label="item.text"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="search.pos" placeholder="分部工程">
          <el-option
            v-for="item in posDataSet"
            :key="item.value"
            :label="item.text"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="search.unit" placeholder="单元工程">
          <el-option
            v-for="item in unitDataSet"
            :key="item.value"
            :label="item.text"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button type="primary">查询</el-button>
      </div>
      <div class="house-grid">
        <el-table :data="grid.top" border :stripe="true">
          <el-table-column prop="period" label="标段"></el-table-column>
          <el-table-column prop="target" label="仓面"></el-table-column>
          <el-table-column prop="time" label="时间" width="150"></el-table-column>
          <el-table-column prop="remark" label="异常事件描述"></el-table-column>
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
  </div>
</template>

<script>
  export default {
    name: 'monitor',
    data() {
      return {
        search: {
          pos: '',
          unit: '',
          match: '',
          period: ''
        },
        matchDataSet: [
          {
            text: '一致性',
            value: ''
          },
          {
            text: '一致',
            value: '一致'
          },
          {
            text: '不一致',
            value: '不一致'
          }
        ],
        unitDataSet: [
          {
            text: '单元工程',
            value: ''
          },
          {
            text: '单元工程1',
            value: '单元工程1'
          },
          {
            text: '单元工程2',
            value: '单元工程2'
          },
          {
            text: '单元工程3',
            value: '单元工程3'
          }
        ],
        periodDataSet: [
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
        posDataSet: [
          {
            text: '分部工程',
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
        grid: {
          top: [
            {
              time: '2018-7-9 16:45:17',
              period: '引发水电标',
              target: '1#进水塔EL2587M',
              request: 'C₂35XXXXXXXX',
              car: '川U3412',
              send: 'C₂35XXXXXXXX',
              match: '一致'
            },
            {
              time: '2018-7-9 16:45:17',
              period: '引发水电标',
              target: '1#进水塔EL2587M',
              request: 'C₂35XXXXXXXX',
              car: '川U3412',
              send: 'C₂35XXXXXXXX',
              match: '一致'
            },
            {
              time: '2018-7-9 16:45:17',
              period: '引发水电标',
              target: '1#进水塔EL2587M',
              request: 'C₂35XXXXXXXX',
              car: '川U3412',
              send: 'C₂35XXXXXXXX',
              match: '一致'
            },
            {
              time: '2018-7-9 16:45:17',
              period: '引发水电标',
              target: '1#进水塔EL2587M',
              request: 'C₂35XXXXXXXX',
              car: '川U3412',
              send: 'C₂35XXXXXXXX',
              match: '一致'
            },
            {
              time: '2018-7-9 16:45:17',
              period: '引发水电标',
              target: '1#进水塔EL2587M',
              request: 'C₂35XXXXXXXX',
              car: '川U3412',
              send: 'C₂35XXXXXXXX',
              match: '一致'
            }
          ]
        }
      };
    }
  };
</script>

<style scoped>
  .clear{
    clear: both;
  }

  .house-item:last-child{
    margin-top: 15px;
  }

  .search{
    margin: 10px 0;
  }

  .house-item .house-top{
    height: 40px;
    line-height: 40px;
    padding-left: 15px;
    background-color: #409EFF;
    font-size: 16px;
    color: #FFF;
  }
</style>

