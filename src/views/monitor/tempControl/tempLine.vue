<template>
  <div class="temp-ctrl">
    <div class="search">
      <el-select v-model="search.period" placeholder="标段">
        <el-option
          v-for="item in periodDataSet"
          :key="item.value"
          :label="item.text"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="search.build" placeholder="分部工程">
        <el-option
          v-for="item in buildDataSet"
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
      <el-button type="primary" @click="drawChart">查询</el-button>
    </div>
    <el-row>
      <el-col :span="20" :offset="2">
        <div class="chart" :id="chartId"></div>
      </el-col>
    </el-row>
    <div class="grid">
      <el-table :cell-style="{padding:'5px 0'}" :data="grid.top" border :stripe="true">
          <el-table-column prop="target" label="仓面"></el-table-column>
          <el-table-column prop="period" label="拌合楼"></el-table-column>
          <el-table-column prop="time" label="检测时间" width="150"></el-table-column>
          <el-table-column prop="temp" label="检测温度"></el-table-column>
          <el-table-column prop="min" label="允许温度最低值"></el-table-column>
          <el-table-column prop="max" label="允许温度最高值"></el-table-column>
        </el-table>
        <el-pagination
          :current-page="1"
          style="float:right;margin-top:5px;"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="5"
          layout="total, sizes, prev, pager, next, jumper"
          :total="201">
        </el-pagination>
        <div class="clear"></div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import utils from '@/utils';
  export default {
    name: 'tempLine',
    props: {
      chartId: {
        type: String,
        default: utils.guid()
      },
      page: {
        type: String
      }
    },
    data() {
      return {
        headerStyle: {
          backgroundColor: '#409EFF',
          color: '#FFF'
        },
        search: {
          build: '',
          period: '',
          unit: ''
        },
        grid: {
          top: [
            {
              time: '2018-7-9 16:45:17',
              period: '引发水电标',
              target: '1#进水塔EL2587M',
              temp: '16℃',
              min: '9℃',
              max: '18℃'
            },
            {
              time: '2018-7-9 16:45:17',
              period: '引发水电标',
              target: '1#进水塔EL2587M',
              temp: '16℃',
              min: '9℃',
              max: '18℃'
            },
            {
              time: '2018-7-9 16:45:17',
              period: '引发水电标',
              target: '1#进水塔EL2587M',
              temp: '16℃',
              min: '9℃',
              max: '18℃'
            },
            {
              time: '2018-7-9 16:45:17',
              period: '引发水电标',
              target: '1#进水塔EL2587M',
              temp: '16℃',
              min: '9℃',
              max: '18℃'
            },
            {
              time: '2018-7-9 16:45:17',
              period: '引发水电标',
              target: '1#进水塔EL2587M',
              temp: '16℃',
              min: '9℃',
              max: '18℃'
            }
          ]
        },
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
            text: '分部工程',
            value: ''
          },
          {
            text: '1#分部工程',
            value: '1#分部工程'
          },
          {
            text: '2#分部工程',
            value: '2#分部工程'
          },
          {
            text: '3#分部工程',
            value: '3#分部工程'
          }
        ]
      };
    },
    mounted() {
      setTimeout(() => this.drawChart(), 100);
    },
    activated() {
      alert(1);
    },
    beforeDestroy() {
      if (this.chart) {
        this.chart.dispose();
        this.chart = null;
      }
    },
    watch: {
      page: function(newValue, oldValue) {
        if (newValue === this.constructor.extendOptions.name) {
          this.drawChart();
        }
      }
    },
    methods: {
      drawChart() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
          if (this.chart) {
            this.chart.dispose();
            this.chart = null;
          }
          this.chart = echarts.init(document.getElementById(this.chartId));
          this.chart.setOption(this.getOptions());
        }, 1000);
      },
      getOptions(title = 'XX仓出机口温度曲线', subtitle = '当前供料仓面：1#进水塔EL2504M  最高温度：19℃  最低温度：8℃') {
        const dataSet = [];
        const now = Date.now();
  
        for (let i = 0; i < 200; i++) {
          dataSet.push({
            text: utils.parseTime(new Date(now - 60 * 1000 * i), '{m}-{d} {h}:{i}'),
            value: Math.ceil(Math.random() * 8) + 13
          });
        }
        dataSet.reverse();

        return {
          title: {
            left: 'center',
            subtext: subtitle,
            text: title
          },
          tooltip: {
              trigger: 'axis'
          },
          grid: {
            left: 50,
            bottom: 110
          },
          xAxis: {
            name: '时间：分',
            data: dataSet.map(item => item.text),
            axisLabel: {
              rotate: 70,
              textStyle: {
                fontSize: 10
              }
            }
          },
          yAxis: {
              name: '温度：℃',
              max: 25,
              min: 5,
              splitLine: {
                  show: false
              }
          },
          dataZoom: [{
              startValue: dataSet[dataSet.length - 10].text
          }, {
              type: 'inside'
          }],
          visualMap: {
              show: false,
              pieces: [
                {
                  gt: 0,
                  lte: 12,
                  color: '#F56C6C'
                },
                {
                  gt: 12,
                  lte: 18,
                  color: '#67C23A'
                },
                {
                  gt: 18,
                  color: '#F56C6C'
                }
              ]
          },
          series: {
              name: '温度',
              type: 'line',
              data: dataSet.map(item => item.value),
              markLine: {
                  silent: true,
                  data: [{
                      yAxis: 18
                  }, {
                      yAxis: 12
                  }]
              }
          }
        };
      }
    }
  };
</script>

<style lang="scss" scoped>
  $bgGolor:#FFF;
  .temp-ctrl{
    background-color: $bgGolor;
    .search{
      background-color: $bgGolor;
      margin-bottom: 10px;
    }
    .chart{
      height: 450px;
    }

    .grid{
      margin-top: 10px;
      .clear{
        clear: both;
      }
    }
  }
</style>


