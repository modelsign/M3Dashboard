<template>
  <div>
    <div class="house-item">
      <div class="house-top">监控列表</div>
      <div class="search">
        <el-select v-model="search.period" placeholder="标段">
          <el-option
            v-for="item in periodDataSet"
            :key="item.value"
            :label="item.text"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="search.pos" placeholder="仓面">
          <el-option
            v-for="item in posDataSet"
            :key="item.value"
            :label="item.text"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="search.state" placeholder="施工状态">
          <el-option key="1" value="" label="施工状态"></el-option>
          <el-option key="2" value="施工中" label="施工中"></el-option>
          <el-option key="3" value="未施工" label="未施工"></el-option>
        </el-select>
        <el-select v-model="search.a" placeholder="振捣时长预警">
          <el-option key="1" value="" label="振捣时长预警"></el-option>
        </el-select>
        <el-select v-model="search.b" placeholder="振捣覆盖面积预警">
          <el-option key="1" value="" label="振捣覆盖面积预警"></el-option>
        </el-select>
        <el-button type="primary">查询</el-button>
      </div>
      <div class="house-grid">
        <el-table :cell-style="{padding:'2px 0'}" :data="grid.top" border :stripe="true">
          <el-table-column prop="period" label="标段"></el-table-column>
          <el-table-column prop="target" label="仓面"></el-table-column>
          <el-table-column prop="time" label="开始时间" width="150"></el-table-column>
          <el-table-column prop="state" label="施工状态"></el-table-column>
          <el-table-column prop="remark" label="累计浇筑方量"></el-table-column>
          <el-table-column prop="remark" label="振捣时长预警"></el-table-column>
          <el-table-column prop="remark" label="振捣覆盖面积预警"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="handleClick(scope.row)">监控明细</el-button>
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
        <div class="clear"></div>
      </div>
    </div>
    <div class="house-item">
      <div class="house-top">监控明细</div>
      <el-row :gutter="20">
        <el-col :span="10" :offset="2">
          <div class="grid-content">
            <div class="title">当前监控仓面：尾调交通洞底板0+86</div>
            <div class="chart" :id="chartId"></div>
            <div class="clear"></div>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="grid-content">
            <div class="content">
              <div class="item">
                <span class="topic">累计监控仓数：</span>
                <span>1仓</span>
              </div>
              <div class="item">
                <span class="topic">累计监控仓数：</span>
                <span>98.2%</span>
              </div>
              <div class="item">
                <span class="topic">合格仓数：</span>
                <span>1仓</span>
              </div>
              <div class="item">
                <span class="topic">振捣时长合格率：</span>
                <span>99.1%</span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import utils from '@/utils';
  import dataSet from './vibration.data.js';
  export default {
    name: 'vibration',
    props: {
      page: String,
      chartId: {
        type: String,
        default: utils.guid()
      }
    },
    data() {
      return {
        search: {
          pos: '',
          unit: '',
          match: '',
          period: '',
          state: '',
          a: '',
          b: ''
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
            text: '仓面',
            value: ''
          },
          {
            text: '仓面1',
            value: '1'
          },
          {
            text: '仓面2',
            value: '2'
          },
          {
            text: '仓面3',
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
    },
    mounted() {
      this.handleClick();
    },
    beforeDestroy() {
      if (this.chart) {
        this.chart.dispose();
        this.chart = null;
      }
    },
    methods: {
      handleClick(row) {
        if (this.chart) this.chart.dispose();
        this.chart = echarts.init(document.getElementById(this.chartId));
        this.drawChart();
      },
      drawChart() {
        const colors = ['#F56C6C', '#67C23A', '#E6A23C'];
        const categories = [
          {
            name: '过振'
          },
          {
            name: '正常'
          },
          {
            name: '欠振'
          }
        ];
        const option = {
          color: colors,
          animationDurationUpdate: 1500,
          animationEasingUpdate: 'quinticInOut',
          legend: [{
            // selectedMode: 'single',
            data: categories.map(c => c.name)
          }],
          series: [
              {
                  type: 'graph',
                  layout: 'none',
                  categories,
                  data: dataSet.nodes.map(node => {
                    const index = Math.floor(Math.random() * 3);
                    return {
                      x: node.x,
                      y: node.y,
                      id: node.id,
                      name: node.label,
                      symbolSize: 10,
                      category: index,
                      itemStyle: {
                          normal: {
                              color: colors[index]
                          }
                      }
                    };
                  }),
                  label: {
                      emphasis: {
                          show: false
                      }
                  },
                  roam: true,
                  focusNodeAdjacency: true
              }
          ]
        };
        this.chart && this.chart.setOption && this.chart.setOption(option, true);
      }
    },
    watch: {
      page: function(newValue, oldValue) {
        if (newValue === this.constructor.extendOptions.name) {
          this.handleClick();
        }
      }
    }
  };
</script>

<style scoped>

  .content{
    width: 400px;
    padding-top: 50px;
  }

  .content .item{
    width: 50%;
    float: left;
    margin-bottom: 20px;
    color: #606266;
    font-size: 14px;
  }

  .content .topic{
    display: inline-block;
    width: 150px;
    text-align: right;
  }

  .title{
    font-size: 16px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-weight: bold;
    width: 500px;
    float: right;
  }

  .chart{
    height: 300px;
    width: 500px;
    border: 1px solid #303133;
    float: right;
  }

  .grid-content{
    height: 350px;
    margin-top: 10px;
  }
  

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

